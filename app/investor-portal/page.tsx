'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/AuthContext';
import { certificates, ledgerEntries, offerings } from '../data';
import {
  Wallet,
  ShieldCheck,
  User,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  ArrowDownLeft,
  Coins,
  FileCheck,
  Scale,
  RefreshCw,
  Copy,
  ExternalLink,
  AlertTriangle,
  LogIn,
  QrCode,
} from 'lucide-react';
import QRVCodeGenerator from '../components/QRVCodeGenerator';

export default function InvestorPortalPage() {
  const { user, profile, updateWallet, acceptDisclosures, signInWithGoogle } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'assets' | 'certificates' | 'ledger' | 'disclosures'>('overview');
  const [walletInput, setWalletInput] = useState('');
  const [isEditingWallet, setIsEditingWallet] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSaveWallet = async () => {
    if (!walletInput.trim()) return;
    await updateWallet(walletInput.trim());
    setIsEditingWallet(false);
  };

  const handleAcknowledgeDisclosures = async () => {
    await acceptDisclosures();
  };

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#0d1428] via-[#111933] to-[#0d1428] border border-amber-500/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            ODeFi™ Production Dashboard
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            OneGodian Finance Dashboard™
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Unified financial control center consolidating non-custodial assets, ODFID™ identity status,
            OBP-1™ verified certificates, and regulatory disclosure records.
          </p>
        </div>

        {/* Identity Status Pill */}
        <div className="flex flex-col items-start md:items-end">
          {user ? (
            <div className="text-right">
              <span className="text-[11px] text-slate-400">Authenticated ID</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-sm font-bold text-amber-300">
                  {profile?.odfid || 'ODFID-INITIALIZED'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {profile?.role || 'Investor'}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 truncate max-w-[200px] block">
                {user.email}
              </span>
            </div>
          ) : (
            <button
              onClick={() => signInWithGoogle()}
              className="btn-gold px-4 py-2 text-xs uppercase tracking-wider font-bold"
            >
              <LogIn className="w-3.5 h-3.5" />
              Sign In with Google
            </button>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto text-xs font-bold uppercase tracking-wider">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'assets', label: 'Assets & Wallet (OBW-1)' },
          { id: 'certificates', label: `Certificates (${certificates.length})` },
          { id: 'ledger', label: `Ledger Records (${ledgerEntries.length})` },
          { id: 'disclosures', label: 'Disclosure Gate' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-[#0a0f20] border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Standard Ecosystem</span>
              <div className="text-2xl font-black text-white">ODeFi™</div>
              <span className="text-[11px] text-amber-400">Canonical Protocol</span>
            </div>

            <div className="p-5 rounded-xl bg-[#0a0f20] border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Token Layer</span>
              <div className="text-2xl font-black text-cyan-400">ODC™ ERC-20</div>
              <span className="text-[11px] text-slate-400 font-mono">Chain ID: 1 (Mainnet)</span>
            </div>

            <div className="p-5 rounded-xl bg-[#0a0f20] border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Verification Status</span>
              <div className="text-2xl font-black text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5" />
                OBP-1™ Active
              </div>
              <span className="text-[11px] text-slate-400">Cryptographic Provenance</span>
            </div>

            <div className="p-5 rounded-xl bg-[#0a0f20] border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Disclosure Status</span>
              <div className="text-2xl font-black text-amber-300">
                {profile?.disclosureAcceptedAt ? 'Accepted' : 'Gate Required'}
              </div>
              <span className="text-[11px] text-slate-400">
                {profile?.disclosureAcceptedAt ? 'Full Compliance Confirmed' : 'Review & Sign Required'}
              </span>
            </div>
          </div>

          {/* Non-Custodial OBW-1 Integration Card */}
          <div className="p-6 rounded-2xl bg-[#0c1224] border border-[#223055] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    OBW-1™ Non-Custodial Wallet Interface
                  </h3>
                  <p className="text-xs text-slate-400">
                    Direct web3 connection. Keys remain on your client device at all times.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/40 font-mono">
                  Non-Custodial
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070b16] border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Connected Address (OBW-1)</span>
                {isEditingWallet ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="0x..."
                      value={walletInput}
                      onChange={(e) => setWalletInput(e.target.value)}
                      className="px-2 py-1 text-xs bg-slate-900 border border-slate-700 text-white rounded font-mono"
                    />
                    <button
                      onClick={handleSaveWallet}
                      className="px-2 py-1 text-[11px] bg-amber-500 text-black font-bold rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditingWallet(false)}
                      className="text-[11px] text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setWalletInput(profile?.walletAddress || '');
                      setIsEditingWallet(true);
                    }}
                    className="text-amber-400 hover:underline text-xs"
                  >
                    Edit Wallet
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono text-slate-200 truncate max-w-md">
                  {profile?.walletAddress || '0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98'}
                </code>
                <button
                  onClick={() =>
                    copyToClipboard(profile?.walletAddress || '0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98')
                  }
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-amber-300"
                  title="Copy Address"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: ASSETS & WALLET */}
      {activeTab === 'assets' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#0c1224] border border-[#223055] space-y-4">
            <h3 className="text-lg font-bold text-white">Registered Ecosystem Assets</h3>
            <p className="text-xs text-slate-400">
              Verified token contracts on Ethereum Mainnet. Direct non-custodial balance inquiries via OBW-1™.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#070b16] border border-amber-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-white">ODC™ (OneGodian Digital Coin)</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    ERC-20 Mainnet
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Contract:</span>
                    <span className="font-mono text-slate-200">0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Decimals:</span>
                    <span className="font-mono text-slate-200">18</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Chain ID:</span>
                    <span className="font-mono text-slate-200">1 (Ethereum)</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Authority: ohi-stack/onegodian-digital-coin</span>
                  <a
                    href="https://etherscan.io/token/0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    View Etherscan
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#070b16] border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                    <span className="font-bold text-white">OBP-1™ Provenance Credentials</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    Active Registry
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Cryptographic verification seals binding certificates to ODIN Registry™ records.
                </p>
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Status: Verifiable</span>
                  <Link href="/certificates" className="text-purple-300 hover:underline font-semibold">
                    Inspect Certificates →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: CERTIFICATES */}
      {activeTab === 'certificates' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Active Certificate Records</h3>
            <Link href="/certificates" className="text-xs text-amber-300 hover:underline font-semibold">
              Open Public Verification Page →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="p-5 rounded-2xl bg-[#0b1021] border border-[#212d4d] space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400">{cert.id}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/40">
                      {cert.status}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">{cert.instrument}</h4>
                  <div className="text-xs text-slate-400 space-y-1 mt-2">
                    <div><strong>Holder:</strong> {cert.holder}</div>
                    <div><strong>Issued:</strong> {cert.issued}</div>
                    <div className="truncate font-mono text-[11px] text-slate-500">
                      ODIN ID: ODIN-REG-{cert.id}-2025-V1
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveCertModal(cert.id)}
                    className="flex-1 btn-gold py-2 text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-1.5"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Scan QR-V™</span>
                  </button>
                  <Link
                    href={`/certificates/${cert.id}`}
                    className="px-3 py-2 rounded-xl bg-[#0e1428] hover:bg-[#16203d] border border-slate-700 text-xs font-mono text-slate-200 hover:text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for viewing QR-V seal */}
          {activeCertModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
              <div className="relative max-w-md w-full bg-[#0a0f20] border border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="text-sm font-bold text-white font-mono">
                    Certificate QR-V™ Seal
                  </div>
                  <button
                    onClick={() => setActiveCertModal(null)}
                    className="text-slate-400 hover:text-white text-xs font-mono px-2 py-1 rounded bg-slate-800"
                  >
                    ✕ Close
                  </button>
                </div>

                {(() => {
                  const targetCert = certificates.find((c) => c.id === activeCertModal);
                  if (!targetCert) return null;
                  return (
                    <QRVCodeGenerator
                      certificateId={targetCert.id}
                      instrumentName={targetCert.instrument}
                      status={targetCert.status}
                      verificationUrl={targetCert.verificationUrl}
                      odinIdentifier={`ODIN-REG-${targetCert.id}-2025-V1`}
                      size={210}
                    />
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB: LEDGER */}
      {activeTab === 'ledger' && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Authoritative Ledger Records</h3>
          <div className="space-y-2">
            {ledgerEntries.map((entry) => (
              <div
                key={entry.reference}
                className="p-4 rounded-xl bg-[#090e1f] border border-slate-800 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-amber-400 font-bold">{entry.reference}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {entry.status}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">{entry.activity}</div>
                </div>
                <span className="text-xs text-slate-500 font-mono">{entry.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: DISCLOSURES */}
      {activeTab === 'disclosures' && (
        <div className="p-6 rounded-2xl bg-[#0c1224] border border-[#212d4d] space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-xs">
            <Scale className="w-4 h-4" />
            Disclosure Acceptance Gate
          </div>
          <h3 className="text-xl font-bold text-white">
            Mandatory Participation & Risk Disclosures
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            By interacting with ODeFi™, OBW-1™, or ONEGODIAN Capital instruments, you acknowledge that
            ONEGODIAN, LLC operates non-custodial software. Assets are not guaranteed by any government,
            and transactions on the blockchain are irreversible.
          </p>

          <div className="p-4 rounded-xl bg-[#080c18] border border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Qualified Investor eligibility guidelines understood.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Non-custodial key independence acknowledged.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Commercial infrastructure separation from governmental entities confirmed.</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            {profile?.disclosureAcceptedAt ? (
              <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Acknowledged on {new Date(profile.disclosureAcceptedAt).toLocaleDateString()}
              </div>
            ) : (
              <button
                onClick={handleAcknowledgeDisclosures}
                className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider font-extrabold"
              >
                Sign & Accept Disclosures
              </button>
            )}

            <Link href="/disclosures" className="text-xs text-amber-300 hover:underline">
              Read Full Disclosure Text →
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
