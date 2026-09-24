import Link from 'next/link';
import { offerings } from '../data';
import { ShieldCheck, Scale, Lock, ArrowRight, CheckCircle2, AlertTriangle, FileText, Coins } from 'lucide-react';

export default function OfferingsPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
          <span>Consolidated Capital Architecture</span>
          <span>•</span>
          <span>ODeFi.OneGodian.com</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Capital Offerings & Digital Instruments
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Capital offerings previously hosted on Capital.OneGodian.com are governed by mandatory electronic
          disclosure gates, participant eligibility review, and OBP-1™ cryptographic verification before any
          document or tokenized participation may proceed.
        </p>
      </div>

      {/* Strict Compliance Warning */}
      <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200/90 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-white block font-semibold">Disclosure Gate In Effect</strong>
          <p>
            No offering is available for open purchase without prior identity verification (ODFID™),
            qualified participant accreditation review, and recorded electronic disclosure acceptance.
            ONEGODIAN, LLC does not operate as an unregistered securities exchange.
          </p>
        </div>
      </div>

      {/* Offerings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((offering) => (
          <div
            key={offering.code}
            className="rounded-2xl p-6 bg-[#0b1021] border border-[#212d4d] hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">
                  {offering.code}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                  offering.status === 'Active'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-700/40'
                    : 'bg-amber-950 text-amber-300 border-amber-700/40'
                }`}>
                  {offering.status}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">{offering.name}</h2>
                <span className="text-xs text-slate-400">{offering.instrumentType}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070b16] border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Interest / Coupon:</span>
                  <span className="font-bold text-amber-300 font-mono">{offering.rate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Maturity Term:</span>
                  <span className="text-white font-mono">{offering.term}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Participation Bounds:</span>
                  <span className="text-white font-mono">{offering.minimum} – {offering.maximum}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {offering.summary}
              </p>

              <div className="p-3 rounded-lg bg-[#070c18] border border-slate-800 text-[11px] text-slate-400">
                <div className="font-semibold text-slate-200 mb-0.5 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-amber-400" />
                  Disclosure Requirement
                </div>
                {offering.disclosureStatus}
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <Link
                href="/disclosures"
                className="w-full btn-gold py-2.5 text-xs uppercase tracking-wider font-bold block text-center"
              >
                Review Disclosure Packet
              </Link>
              <Link
                href="/investor-portal"
                className="w-full btn-secondary py-2.5 text-xs uppercase tracking-wider font-semibold block text-center"
              >
                Access In Dashboard
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ODC Ecosystem Cross-Reference */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0b1021] via-[#130f26] to-[#0b1021] border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 font-mono">
            <Coins className="w-4 h-4 text-amber-400" />
            Digital Asset Layer Cross-Reference
          </div>
          <h3 className="text-lg font-bold text-white">
            ODC™ (OneGodian Digital Coin)
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Authoritative utility coin on Ethereum Mainnet (ERC-20). Contract: <code className="font-mono text-amber-300">0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98</code>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/certificates"
            className="btn-secondary px-4 py-2.5 text-xs uppercase tracking-wider font-bold"
          >
            Verify Certificates
          </Link>
          <a
            href="https://etherscan.io/token/0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98"
            target="_blank"
            rel="noreferrer"
            className="btn-gold px-4 py-2.5 text-xs uppercase tracking-wider font-bold"
          >
            Etherscan Contract
          </a>
        </div>
      </div>
    </main>
  );
}
