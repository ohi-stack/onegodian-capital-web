import Link from 'next/link';
import { zolfiDisclosure, zolfiRoutes, zolfiServices } from './data';
import { ShieldCheck, Lock, Code2, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Zolfi™ Blockchain Security & Smart Contract Architecture | ODeFi™',
  description:
    'Zolfi™ is the blockchain security, smart contract readiness, QRV verification, and investor trust infrastructure layer inside ODeFi and ONEGODIAN Capital.',
};

export default function ZolfiPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Hero Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zolfi™ Protocol Security Infrastructure</span>
          <span>•</span>
          <span>QR-V™ / OBP-1™ Enabled</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Capital-Grade Blockchain Security & Trust Layer
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Zolfi™ organizes blockchain security review, smart contract intelligence, cryptographic audit trails,
          and post-quantum preparation for the OneGodian Digital Finance™ ecosystem.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/zolfi/blockchain-security"
            className="btn-gold px-5 py-2.5 text-xs uppercase tracking-wider font-bold"
          >
            Review Security Layer
          </Link>
          <Link
            href="/zolfi/smart-contracts"
            className="btn-secondary px-5 py-2.5 text-xs uppercase tracking-wider font-semibold"
          >
            Smart Contract Readiness
          </Link>
          <Link
            href="/api/zolfi/manifest"
            target="_blank"
            className="px-4 py-2.5 text-xs text-amber-300 hover:text-white flex items-center gap-1 font-mono"
          >
            API Manifest
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Zolfi™ Product and Service Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {zolfiServices.map((service) => (
            <div
              key={service.slug}
              className="p-6 rounded-2xl bg-[#0b1021] border border-[#212d4d] space-y-3 flex flex-col justify-between hover:border-purple-500/40 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono">
                  Module
                </span>
                <h3 className="text-base font-bold text-white mt-2">{service.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {service.summary}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <Link
                  href={`/zolfi/${service.slug}`}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  Open Module Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclosure Boundary */}
      <div className="p-6 rounded-2xl bg-[#070b16] border border-slate-800 text-xs text-slate-400 space-y-2">
        <h4 className="font-bold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          Disclosure Boundary
        </h4>
        <p className="leading-relaxed">{zolfiDisclosure}</p>
      </div>
    </main>
  );
}
