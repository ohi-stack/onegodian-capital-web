import Link from 'next/link';
import { readinessItems } from '../data';
import { Layers, ShieldCheck, CheckCircle2, Clock, AlertTriangle, Code2, Server, Database } from 'lucide-react';

const layerStatus = [
  ['Protocol Branding & Emblem', '100% Locked', 'ODeFi™ luxury branding, official emblem, and typography fully integrated.'],
  ['Mega Menu & UX Architecture', '100% Locked', 'Enterprise mega menu with Finance, Wallet, Assets, Capital, and Developers.'],
  ['Authentication & ODFID™', 'Operational', 'Firebase Auth with Google popup, email, and ODFID identity binding.'],
  ['Non-Custodial Wallet (OBW-1™)', 'Active Interface', 'Non-custodial key independence, address management, and zero secret logging.'],
  ['Canonical Asset Layer (ODC™)', 'Mainnet Deployed', 'ERC-20 smart contract deployed at 0x9eee...ce98 (Chain ID: 1).'],
  ['Provenance & Verification (OBP-1™)', 'Active', 'Verifiable certificate lookup with cryptographic provenance audit hashing.'],
  ['Disclosure Gate Engine', 'Active & Enforced', 'Electronic disclosure acceptance with Firestore audit logging.'],
  ['Canonical Consolidation', 'Active', 'Capital.OneGodian.com consolidated under ODeFi.OneGodian.com authority.'],
];

export default function ProductionReadinessPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>ODeFi™ Production Architecture Lock</span>
          <span>•</span>
          <span>Governing Status</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Production Readiness & Audit Matrix
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Comprehensive compliance and technical readiness tracking for ODeFi.OneGodian.com.
          Following the governing principle: <em>If it is not fully operational, documented, tested,
          secured, and repeatable, it does not exist in the current production version.</em>
        </p>
      </div>

      {/* Production Gate Status Card */}
      <div className="p-6 rounded-2xl bg-[#0b1021] border border-amber-500/30 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-1">
          <span className="text-xs text-slate-400 font-medium">Canonical Platform</span>
          <div className="text-lg font-bold text-white font-mono">ODeFi.OneGodian.com</div>
          <span className="text-[11px] text-amber-400 font-semibold">ohi-stack/odefi-onegodian</span>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-slate-400 font-medium">Deployment Status</span>
          <div className="text-lg font-bold text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Production Live
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Next.js 15 App Router</span>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-slate-400 font-medium">Identity & Auth</span>
          <div className="text-lg font-bold text-cyan-400">Firebase + ODFID™</div>
          <span className="text-[11px] text-slate-400">Google Auth & Firestore Rules</span>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-slate-400 font-medium">ODC Token Mainnet</span>
          <div className="text-lg font-bold text-amber-300 font-mono">0x9eee...ce98</div>
          <span className="text-[11px] text-slate-400">Chain ID: 1 (Ethereum)</span>
        </div>
      </div>

      {/* Layer Status Breakdown */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          Production Layer Architecture Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {layerStatus.map(([layer, badge, desc]) => (
            <div
              key={layer}
              className="p-5 rounded-2xl bg-[#0b1021] border border-[#212d4d] space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                    {badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">{layer}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                Verified Architectural Lock
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Governing Transaction Architecture Flow */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1224] to-[#120e29] border border-purple-500/30 space-y-4">
        <h3 className="text-lg font-bold text-white">Standard Transaction Architecture</h3>
        <p className="text-xs text-slate-300">
          The ecosystem adheres to a strict linear authority flow across decoupled subsystems:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs font-mono">
          {[
            ['ODFID™', 'Identity'],
            ['OBP-1™', 'Verification'],
            ['OBW-1™', 'Wallet'],
            ['ODC™', 'Digital Asset'],
            ['TX', 'Transaction'],
            ['ODIN™', 'Registry Record'],
            ['Dashboard', 'Console'],
            ['Reporting', 'Statements'],
          ].map(([abbr, label], idx) => (
            <div key={abbr} className="p-3 rounded-xl bg-[#070b16] border border-slate-800 space-y-1">
              <span className="text-[10px] text-amber-400 font-bold block">{idx + 1}</span>
              <div className="font-bold text-white text-xs">{abbr}</div>
              <div className="text-[10px] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Discontinued / Gated Features Notice */}
      <div className="p-6 rounded-2xl bg-[#070b16] border border-slate-800 text-xs text-slate-400 space-y-3">
        <h4 className="font-bold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          Financial Feature Gate Enforcement
        </h4>
        <p className="leading-relaxed">
          The following features remain disabled in production until their respective formal compliance reviews
          and licenses are executed: Swaps, Staking, Yield, Lending, and Custody. No feature is marked "Live" merely
          because interface code or mockups exist.
        </p>
      </div>
    </main>
  );
}
