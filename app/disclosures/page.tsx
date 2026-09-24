'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/AuthContext';
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck, Lock, ArrowRight, FileText } from 'lucide-react';

const disclosureItems = [
  {
    title: 'General Digital Finance & Capital Disclosure',
    status: 'Required',
    body: 'Applies to all contributions, transactions, capital-support actions, project funding, paid access, and participation pathways connected to ONEGODIAN, LLC and ODeFi™.',
  },
  {
    title: 'ODC™ Digital Asset & Token Disclosure',
    status: 'Digital Asset Review',
    body: 'Applies to ODC (Ethereum Mainnet ERC-20: 0x9eee...ce98), OBP-1™-verified assets, blockchain-linked records, digital certificates, and non-custodial wallet interactions.',
  },
  {
    title: 'Non-Custodial Architecture & OBW-1™ Independence',
    status: 'Key Independence',
    body: 'Confirms that ODeFi™ and OBW-1™ never request, store, or possess user private keys. Assets remain solely under participant control. Lost keys cannot be recovered by ONEGODIAN, LLC.',
  },
  {
    title: 'Platform, Infrastructure & Network Risks',
    status: 'Platform Review',
    body: 'Applies to decentralized protocol interactions across odefi.onegodian.com, API bridges, smart contracts, third-party node providers, and gas fee fluctuations.',
  },
  {
    title: 'Institutional Note & Bond Offering Disclosures',
    status: 'Instrument Level',
    body: 'Applies to ONEGODIAN Founder Note™ (OGFN-2025), Infrastructure Bond™ (OGIB-2025), and Platform Growth Note™ (OPGN-2025). Restricted to accredited/qualified participants.',
  },
  {
    title: 'Corporate Identity & Non-Governmental Entity Notice',
    status: 'Legal Status',
    body: 'Confirms that ONEGODIAN, LLC is a private commercial technology, publishing, and infrastructure enterprise. It is not a government agency, sovereign state, or central bank.',
  },
];

const acknowledgements = [
  'I am responsible for reviewing all applicable disclosures before participating or connecting my wallet.',
  'I understand that digital finance and capital instruments involve financial, operational, smart contract, and market risks.',
  'I understand that no returns, appreciation, liquidity, or recovery of assets is guaranteed by ONEGODIAN, LLC or any affiliate.',
  'I understand that ONEGODIAN, LLC is a private commercial entity and not a bank, broker-dealer, or governmental agency.',
  'I understand that all capital-related materials are subject to revision, audit updates, and compliance gates.',
  'I acknowledge that my wallet (OBW-1™) is non-custodial and I bear full responsibility for private key safeguarding.',
  'I understand that transactions executed on the blockchain are irreversible once mined by the network.',
];

export default function DisclosuresPage() {
  const { user, profile, acceptDisclosures, signInWithGoogle } = useAuth();
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleAcceptance = async () => {
    if (!agreed) return;
    try {
      setSubmitting(true);
      await acceptDisclosures();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
          <Scale className="w-3.5 h-3.5" />
          <span>Compliance & Legal Safeguards</span>
          <span>•</span>
          <span>ODeFi.OneGodian.com</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Mandatory Disclosure Center
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The Disclosure Center is the authoritative review gate for all participants. Review and electronic
          acknowledgement must occur prior to any capital participation or gated protocol feature activation.
        </p>
      </div>

      {/* Critical Non-Custodial & Legal Notice */}
      <div className="p-6 rounded-2xl bg-[#0e1428] border border-amber-500/40 space-y-3">
        <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-xs font-mono">
          <AlertTriangle className="w-4 h-4" />
          Governing Disclosure Notice
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Capital participation and digital finance interaction with ONEGODIAN, LLC are subject to strict compliance gates.
          Nothing on this platform constitutes legal, tax, securities, or financial advice. Participants must consult their own
          qualified advisers. ONEGODIAN, LLC operates private software infrastructure and does not act as an investment broker.
        </p>
      </div>

      {/* Interactive Acknowledgement Box */}
      <div className="p-6 rounded-2xl bg-[#0b1021] border border-[#223055] space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            Electronic Disclosure Sign-off Gate
          </h3>
          <span className="text-xs font-mono text-slate-400">
            {profile?.disclosureAcceptedAt ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Signed {new Date(profile.disclosureAcceptedAt).toLocaleDateString()}
              </span>
            ) : (
              <span className="text-amber-400 font-bold">Action Required</span>
            )}
          </span>
        </div>

        <div className="space-y-2">
          {acknowledgements.map((item, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-[#070b16] border border-slate-800 flex items-start gap-3 text-xs text-slate-300"
            >
              <span className="font-mono text-amber-400 font-bold shrink-0">{index + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {user ? (
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed || !!profile?.disclosureAcceptedAt}
                disabled={!!profile?.disclosureAcceptedAt}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-0"
              />
              <span>
                I confirm that I have read, understood, and accept all listed disclosures on behalf of{' '}
                <strong className="text-white font-mono">{user.email}</strong>.
              </span>
            </label>

            {!profile?.disclosureAcceptedAt ? (
              <button
                onClick={handleAcceptance}
                disabled={!agreed || submitting}
                className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider font-extrabold disabled:opacity-50"
              >
                {submitting ? 'Recording...' : 'Accept & Record Gate'}
              </button>
            ) : (
              <div className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Gate Validated in Firestore
              </div>
            )}
          </div>
        ) : (
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Please authenticate to electronically record your disclosure acceptance.
            </span>
            <button
              onClick={() => signInWithGoogle()}
              className="btn-gold px-5 py-2 text-xs uppercase tracking-wider font-bold"
            >
              Sign In to Accept
            </button>
          </div>
        )}
      </div>

      {/* Disclosure Categories Grid */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Specific Disclosure Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disclosureItems.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#0b1021] border border-[#212d4d] space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.body}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                Audited & Maintained by ONEGODIAN Legal Infrastructure
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
