"use client";

import { useEffect, useMemo, useState } from "react";

const ODC_CONTRACT = "0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98";
const ETHEREUM_CHAIN_ID = "0x1";
const BLOCKSCOUT_API = "https://eth.blockscout.com/api/v2";

type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};

type BlockscoutAddress = { hash?: string } | null;

type BlockscoutTransaction = {
  hash: string;
  timestamp?: string;
  status?: string;
  method?: string | null;
  value?: string;
  from?: BlockscoutAddress;
  to?: BlockscoutAddress;
};

type TransactionResponse = {
  items?: BlockscoutTransaction[];
};

function getEthereum(): EthereumProvider | null {
  if (typeof window === "undefined") return null;
  return (window as typeof window & { ethereum?: EthereumProvider }).ethereum ?? null;
}

function shortAddress(address: string) {
  return `${address.slice(0, 8)}…${address.slice(-6)}`;
}

function formatUnits(value: bigint, decimals = 18, precision = 6) {
  const base = 10n ** BigInt(decimals);
  const whole = value / base;
  const fraction = (value % base).toString().padStart(decimals, "0").slice(0, precision).replace(/0+$/, "");
  return fraction ? `${whole.toLocaleString("en-US")}.${fraction}` : whole.toLocaleString("en-US");
}

function parseHexBalance(value: unknown) {
  if (typeof value !== "string" || !value.startsWith("0x")) return 0n;
  return BigInt(value);
}

function balanceOfData(address: string) {
  return `0x70a08231000000000000000000000000${address.slice(2).toLowerCase()}`;
}

export default function WalletDashboard() {
  const [displayName, setDisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [ethBalance, setEthBalance] = useState<bigint>(0n);
  const [odcBalance, setOdcBalance] = useState<bigint>(0n);
  const [transactions, setTransactions] = useState<BlockscoutTransaction[]>([]);
  const [status, setStatus] = useState("Connect a compatible Ethereum wallet to begin.");
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const savedName = window.localStorage.getItem("odc-display-name") ?? "";
    setDisplayName(savedName);
  }, []);

  const explorerUrl = useMemo(
    () => (address ? `https://etherscan.io/address/${address}` : "https://etherscan.io/token/" + ODC_CONTRACT),
    [address]
  );

  async function loadWalletData(walletAddress: string) {
    const ethereum = getEthereum();
    if (!ethereum) throw new Error("No compatible Ethereum wallet was detected.");

    const [ethResult, odcResult] = await Promise.all([
      ethereum.request({ method: "eth_getBalance", params: [walletAddress, "latest"] }),
      ethereum.request({
        method: "eth_call",
        params: [{ to: ODC_CONTRACT, data: balanceOfData(walletAddress) }, "latest"]
      })
    ]);

    setEthBalance(parseHexBalance(ethResult));
    setOdcBalance(parseHexBalance(odcResult));

    try {
      const response = await fetch(`${BLOCKSCOUT_API}/addresses/${walletAddress}/transactions`, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Transaction provider unavailable");
      const data = (await response.json()) as TransactionResponse;
      setTransactions((data.items ?? []).slice(0, 10));
    } catch {
      setTransactions([]);
    }

    setLastUpdated(new Date().toISOString());
  }

  async function connectWallet() {
    const ethereum = getEthereum();
    if (!ethereum) {
      setStatus("No compatible Ethereum wallet was detected. Install or open a browser wallet to continue.");
      return;
    }

    setLoading(true);
    setStatus("Requesting read-only wallet access…");

    try {
      const chainId = await ethereum.request({ method: "eth_chainId" });
      if (chainId !== ETHEREUM_CHAIN_ID) {
        await ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: ETHEREUM_CHAIN_ID }] });
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const walletAddress = Array.isArray(accounts) && typeof accounts[0] === "string" ? accounts[0] : "";
      if (!walletAddress) throw new Error("The wallet did not return an address.");

      setAddress(walletAddress);
      await loadWalletData(walletAddress);
      setStatus("Wallet linked for read-only viewing. No transaction was signed or submitted.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Wallet connection was not completed.");
    } finally {
      setLoading(false);
    }
  }

  async function refresh() {
    if (!address) return;
    setLoading(true);
    setStatus("Refreshing Ethereum data…");
    try {
      await loadWalletData(address);
      setStatus("Read-only balances and activity refreshed.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to refresh wallet data.");
    } finally {
      setLoading(false);
    }
  }

  function saveProfile() {
    window.localStorage.setItem("odc-display-name", displayName.trim());
    setStatus("Profile preference saved on this device. Server-backed accounts remain in development.");
  }

  function disconnect() {
    setAddress("");
    setEthBalance(0n);
    setOdcBalance(0n);
    setTransactions([]);
    setLastUpdated(null);
    setStatus("Wallet disconnected from this browser session.");
  }

  return (
    <div className="wallet-console">
      <section className="dashboard-hero">
        <div>
          <span className="eyebrow">Sprint 4 · Accounts and wallets</span>
          <h1>ODC Wallet Console</h1>
          <p>
            Connect an Ethereum wallet to view public balances and recent blockchain activity. This interface is non-custodial and never requests a private key, seed phrase, or recovery phrase.
          </p>
        </div>
        <span className="status-pill">Read-only beta</span>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <div className="card-heading">
            <div>
              <span className="card-label">Account profile</span>
              <h2>{displayName || "ODC user"}</h2>
            </div>
            <span className="status-dot development">In development</span>
          </div>
          <label className="field-label" htmlFor="display-name">Display name</label>
          <input
            id="display-name"
            className="text-input"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            placeholder="Enter a display name"
            maxLength={80}
          />
          <button className="button" type="button" onClick={saveProfile}>Save on this device</button>
          <p className="microcopy">Email authentication, verified profiles, password recovery, and server sessions require the production account database and remain in development.</p>
        </article>

        <article className="dashboard-card wallet-card">
          <div className="card-heading">
            <div>
              <span className="card-label">Linked wallet</span>
              <h2>{address ? shortAddress(address) : "Not connected"}</h2>
            </div>
            <span className={`status-dot ${address ? "live" : "planned"}`}>{address ? "Connected" : "Available"}</span>
          </div>
          <p className="wallet-status" role="status">{status}</p>
          <div className="actions compact-actions">
            {!address ? (
              <button className="button primary" type="button" onClick={connectWallet} disabled={loading}>
                {loading ? "Connecting…" : "Connect Wallet"}
              </button>
            ) : (
              <>
                <button className="button primary" type="button" onClick={refresh} disabled={loading}>
                  {loading ? "Refreshing…" : "Refresh Data"}
                </button>
                <button className="button" type="button" onClick={disconnect}>Disconnect</button>
              </>
            )}
            <a className="button" href={explorerUrl} target="_blank" rel="noreferrer">View on Etherscan</a>
          </div>
        </article>
      </section>

      <section className="balance-grid" aria-label="Read-only wallet balances">
        <article className="balance-card">
          <span className="card-label">ODC balance</span>
          <strong>{address ? formatUnits(odcBalance) : "—"}</strong>
          <small>Official contract · 18 decimals</small>
        </article>
        <article className="balance-card">
          <span className="card-label">ETH balance</span>
          <strong>{address ? formatUnits(ethBalance) : "—"}</strong>
          <small>Ethereum Mainnet</small>
        </article>
        <article className="balance-card">
          <span className="card-label">Data freshness</span>
          <strong>{lastUpdated ? new Date(lastUpdated).toLocaleTimeString("en-US") : "—"}</strong>
          <small>{lastUpdated ? new Date(lastUpdated).toLocaleDateString("en-US") : "Connect a wallet"}</small>
        </article>
      </section>

      <section className="dashboard-card transaction-card">
        <div className="card-heading">
          <div>
            <span className="card-label">Transaction history</span>
            <h2>Recent Ethereum activity</h2>
          </div>
          <span className="status-dot live">Public data</span>
        </div>

        {!address ? (
          <div className="empty-state">Connect a wallet to display recent public Ethereum transactions.</div>
        ) : transactions.length === 0 ? (
          <div className="empty-state">No recent transactions were returned. Use Etherscan for the complete authoritative history.</div>
        ) : (
          <div className="transaction-list">
            {transactions.map((transaction) => {
              const incoming = transaction.to?.hash?.toLowerCase() === address.toLowerCase();
              return (
                <a
                  className="transaction-row"
                  key={transaction.hash}
                  href={`https://etherscan.io/tx/${transaction.hash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`direction ${incoming ? "incoming" : "outgoing"}`}>{incoming ? "Received" : "Sent"}</span>
                  <span>
                    <strong>{transaction.method || "Ethereum transaction"}</strong>
                    <small>{transaction.timestamp ? new Date(transaction.timestamp).toLocaleString("en-US") : "Timestamp unavailable"}</small>
                  </span>
                  <span className="tx-hash">{transaction.hash.slice(0, 10)}…{transaction.hash.slice(-8)}</span>
                  <span className={`tx-status ${transaction.status === "ok" ? "ok" : "unknown"}`}>{transaction.status === "ok" ? "Confirmed" : transaction.status || "Unknown"}</span>
                </a>
              );
            })}
          </div>
        )}
      </section>

      <section className="security-banner">
        <strong>Security boundary</strong>
        <p>ODC.OneGodian.com does not hold your assets and cannot recover lost wallet credentials. Never share a private key, seed phrase, or recovery phrase with this site or anyone claiming to represent ODC.</p>
      </section>
    </div>
  );
}
