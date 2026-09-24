'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from './lib/AuthContext';
import {
  ShieldCheck,
  Wallet,
  ArrowRight,
  Sparkles,
  Coins,
  CheckCircle2,
  Lock,
  Scale,
  FileCheck,
  ChevronRight,
  TrendingUp,
  Cpu,
  Layers,
  ExternalLink,
  Activity,
  Globe
} from 'lucide-react';

export default function HomePage() {
  const { user, profile } = useAuth();
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      step: '01',
      abbr: 'ODFID™',
      name: 'Financial Identity Layer',
      subtitle: 'Native Identity & Role Control',
      desc: 'Separation of identity, authentication, and authorization. Non-custodial credentialing with tier-based eligibility verification.',
      status: 'In Development',
      badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-700/50',
    },
    {
      step: '02',
      abbr: 'OBP-1™',
      name: 'Verification & Provenance',
      subtitle: 'Cryptographic Certificate Proof',
      desc: 'High-assurance validation for instruments, capital notes, and user actions. Verification fails closed if authenticity is unconfirmed.',
      status: 'Active',
      badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50',
    },
    {
      step: '03',
      abbr: 'OBW-1™',
      name: 'Non-Custodial Wallet Interface',
      subtitle: 'User Key Independence',
      desc: 'Direct interaction with Ethereum Mainnet and ERC-20 assets. Private keys, seeds, and signatures remain strictly client-side.',
      status: 'Integrated',
      badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-700/50',
    },
    {
      step: '04',
      abbr: 'ODC™',
      name: 'OneGodian Digital Coin',
      subtitle: 'Ethereum Mainnet ERC-20',
      desc: 'Canonical utility token deployed at 0x9eee...ce98 (Chain ID: 1). Authoritative transaction and governance utility asset.',
      status: 'Live on Mainnet',
      badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/50',
    },
    {
      step: '05',
      abbr: 'ODIN™',
      name: 'Canonical Record Registry',
      subtitle: 'Immutable Registry & Identifiers',
      desc: 'Canonical identifier system mapping instruments, participants, and certificates into an auditable public ledger.',
      status: 'Operational',
      badgeClass: 'bg-blue-950/80 text-blue-300 border-blue-700/50',
    },
    {
      step: '06',
      abbr: 'DASHBOARD™',
      name: 'Finance Dashboard Control',
      subtitle: 'Integrated Asset Center',
      desc: 'Unified investor and participant console consolidating holdings, disclosures, verified certificates, and audit statements.',
      status: 'Live',
      badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-[#18233c]">
        {/* Subtle Luxury Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-900/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ODeFi™ Production Architecture Lock</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Finance Without Borders</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Decentralized Finance. <br />
                <span className="gold-gradient-text">Institutional Trust.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                The canonical financial platform for the <strong className="text-white">OneGodian Digital Finance™</strong> ecosystem. 
                Integrating non-custodial wallet interfaces, cryptographic verification, 
                and verified capital instrument ledgers.
              </p>

              {/* Standard Transaction Flow Teaser */}
              <div className="p-3.5 rounded-xl bg-[#091024]/80 border border-[#212d4d] text-xs text-slate-300 font-mono flex items-center gap-2 overflow-x-auto">
                <span className="text-amber-400 font-bold shrink-0">Standard Flow:</span>
                <span className="text-slate-300">ODFID™</span>
                <span className="text-slate-500">→</span>
                <span className="text-purple-300">OBP-1™</span>
                <span className="text-slate-500">→</span>
                <span className="text-amber-300">OBW-1™</span>
                <span className="text-slate-500">→</span>
                <span className="text-cyan-300">ODC™</span>
                <span className="text-slate-500">→</span>
                <span className="text-slate-300">ODIN™</span>
                <span className="text-slate-500">→</span>
                <span className="text-emerald-300">Dashboard</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/investor-portal"
                  className="btn-gold px-6 py-3.5 text-sm uppercase tracking-wider font-extrabold shadow-xl shadow-amber-500/10"
                >
                  <Wallet className="w-4 h-4" />
                  Launch Finance Dashboard
                </Link>
                <Link
                  href="/offerings"
                  className="btn-secondary px-6 py-3.5 text-sm uppercase tracking-wider font-bold"
                >
                  View Capital Offerings
                </Link>
                <Link
                  href="/certificates"
                  className="px-4 py-3.5 text-sm font-semibold text-slate-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                >
                  Verify Certificate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">ERC-20</div>
                  <div className="text-xs text-slate-400 font-medium">ODC™ Ethereum Mainnet</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">Non-Custodial</div>
                  <div className="text-xs text-slate-400 font-medium">OBW-1™ Key Independence</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">100% Gated</div>
                  <div className="text-xs text-slate-400 font-medium">Disclosure Controlled</div>
                </div>
              </div>
            </div>

            {/* Right Hero Emblem & Live Console */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-b from-[#11182d] via-[#0b1021] to-[#070b18] border border-[#223055] p-6 shadow-2xl shadow-purple-950/50">
                {/* Emblem Showcase */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 border border-amber-500/20 bg-gradient-to-br from-[#1b1030] to-[#070c1a] flex items-center justify-center p-4">
                  <Image
                    src="/odefi-logo.svg"
                    alt="ODeFi Luxury Emblem"
                    width={400}
                    height={150}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                    CANONICAL NODE
                  </div>
                </div>

                {/* Live Node Telemetry Card */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                    <span className="text-slate-400 font-medium">Protocol Authority</span>
                    <span className="text-amber-300 font-semibold font-mono">ODeFi.OneGodian.com</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                    <span className="text-slate-400 font-medium">ODC Token Contract</span>
                    <span className="text-slate-300 font-mono text-[11px] truncate max-w-[200px]" title="0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98">
                      0x9eee1e...d5ce98
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                    <span className="text-slate-400 font-medium">Chain ID & Network</span>
                    <span className="text-slate-200 font-mono">1 (Ethereum Mainnet)</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                    <span className="text-slate-400 font-medium">Verification Engine</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      OBP-1™ Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Active Participant Session</span>
                    <span className="text-amber-400 font-semibold font-mono">
                      {user ? (profile?.odfid || 'AUTHENTICATED') : 'GUEST / UNCLAIMED'}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Security: Fail-Closed Enforced</span>
                  <Link
                    href="/production-readiness"
                    className="text-xs text-amber-300 hover:text-white font-semibold flex items-center gap-1"
                  >
                    View Status Audit
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Authority Architecture Pillars Section */}
      <section className="py-20 bg-[#070b18] border-b border-[#18233c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 font-mono">
              Canonical Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Six Governed Authority Layers
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Each system maintains its own authority boundary to guarantee cryptographic provenance,
              legal clarity, and strict non-custodial protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPillar(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border ${
                  selectedPillar === idx
                    ? 'bg-[#0f1730] border-amber-500/60 shadow-xl shadow-amber-500/5'
                    : 'bg-[#0b1021]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#0d142b]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-600 font-mono">
                    {pillar.step}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${pillar.badgeClass}`}>
                    {pillar.status}
                  </span>
                </div>

                <div className="text-lg font-bold text-white mb-0.5">
                  {pillar.abbr} — {pillar.name}
                </div>
                <div className="text-xs text-amber-300/90 font-medium mb-3">
                  {pillar.subtitle}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Capital Offerings Strip */}
      <section className="py-20 bg-[#050811] border-b border-[#18233c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
                Consolidated Capital Layer
              </span>
              <h2 className="text-3xl font-black text-white mt-1">
                Verified Capital Offerings
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Structured notes, bonds, and participation ledgers previously on Capital.OneGodian.com,
                now consolidated under ODeFi canonical recordkeeping.
              </p>
            </div>
            <Link
              href="/offerings"
              className="btn-secondary px-5 py-2.5 text-xs uppercase tracking-wider font-bold self-start md:self-auto"
            >
              Browse All Offerings
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Founder Note */}
            <div className="rounded-2xl p-6 bg-[#0b1021] border border-[#212d4d] hover:border-amber-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400">OGFN-2025</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/40">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  ONEGODIAN Founder Note™
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Senior institutional capital instrument supporting flagship commercial infrastructure expansion.
                </p>
                <div className="my-4 py-3 border-y border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Coupon Rate</span>
                  <span className="text-amber-300 font-bold font-mono text-sm">7.00% · 5 Years</span>
                </div>
              </div>
              <Link
                href="/offerings"
                className="w-full btn-gold py-2 text-xs uppercase tracking-wider font-bold text-center"
              >
                Review Offering Details
              </Link>
            </div>

            {/* Infrastructure Bond */}
            <div className="rounded-2xl p-6 bg-[#0b1021] border border-[#212d4d] hover:border-amber-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400">OGIB-2025</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/40">
                    Active
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  ONEGODIAN Infrastructure Bond™
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Long-term foundational debt instrument backing physical nodes, data centers, and registry networks.
                </p>
                <div className="my-4 py-3 border-y border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Coupon Rate</span>
                  <span className="text-amber-300 font-bold font-mono text-sm">7.50% · 10 Years</span>
                </div>
              </div>
              <Link
                href="/offerings"
                className="w-full btn-gold py-2 text-xs uppercase tracking-wider font-bold text-center"
              >
                Review Offering Details
              </Link>
            </div>

            {/* Platform Growth Note */}
            <div className="rounded-2xl p-6 bg-[#0b1021] border border-[#212d4d] hover:border-amber-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400">OPGN-2025</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-700/40">
                    Readiness Gate
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Platform Growth Note™
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Ecosystem accelerator instrument for developer API distribution and merchant node rollouts.
                </p>
                <div className="my-4 py-3 border-y border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Target Coupon</span>
                  <span className="text-amber-300 font-bold font-mono text-sm">8.00% · 7 Years</span>
                </div>
              </div>
              <Link
                href="/offerings"
                className="w-full btn-secondary py-2 text-xs uppercase tracking-wider font-bold text-center"
              >
                Inspect Compliance Gate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Non-Custodial Mandatory Disclosures Section */}
      <section className="py-16 bg-[#04060e] text-slate-400 text-xs border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#090d1c] border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-xs">
              <Scale className="w-4 h-4" />
              Mandatory Regulatory & Operational Disclosures
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              <strong>Non-Custodial Architecture:</strong> ODeFi™, OBW-1™, and ONEGODIAN, LLC provide non-custodial software interfaces. At no point does ONEGODIAN, LLC take custody, hold private keys, guarantee returns, or act as an unregistered broker-dealer.
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              <strong>Legal Status Notice:</strong> ONEGODIAN, LLC is a private commercial technology, publishing, and infrastructure enterprise. It is not a sovereign government, municipal authority, or financial regulatory agency. All offerings are subject to qualified accredited eligibility, disclosure acceptance, and document versioning.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <Link href="/disclosures" className="text-amber-300 hover:underline font-semibold">
                Access Complete Disclosure Packet
              </Link>
              <Link href="/certificates" className="text-slate-400 hover:text-white underline">
                Certificate Verification Standards
              </Link>
              <Link href="/production-readiness" className="text-slate-400 hover:text-white underline">
                Production Readiness Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
