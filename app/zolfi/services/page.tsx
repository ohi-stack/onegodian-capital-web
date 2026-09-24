import Link from 'next/link';
import { zolfiDisclosure, zolfiServices } from '../data';
import { ShieldCheck, ArrowRight, Lock, Code2 } from 'lucide-react';

export const metadata = {
  title: 'Zolfi™ Security Services | ODeFi™',
  description:
    'Zolfi™ services inside ODeFi: blockchain security review, smart contract readiness, QRV verification bridge, and investor trust layer.',
};

export default function ZolfiServicesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zolfi™ Services Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Security, Provenance & Verification Services
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Comprehensive review frameworks ensuring non-custodial purity, smart contract safety,
          and cryptographic audit readiness across the OneGodian Digital Finance™ ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {zolfiServices.map((service) => (
          <div
            key={service.slug}
            className="p-6 rounded-2xl bg-[#0b1021] border border-[#212d4d] space-y-3 flex flex-col justify-between hover:border-purple-500/40 transition-colors"
          >
            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono">
                Service Module
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
                Open Service
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

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
