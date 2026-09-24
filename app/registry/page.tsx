import Link from 'next/link';
import { certificates, ledgerEntries, offerings } from '../data';
import { BookOpen, Search, ShieldCheck, FileCheck, Layers, ExternalLink } from 'lucide-react';

export default function RegistryPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>ODIN Registry™ Layer</span>
          <span>•</span>
          <span>Canonical Identifiers</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          ODIN Registry™ Records & Canonical Identifiers
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          The ODIN Registry™ is the canonical record and identifier layer of the OneGodian Digital Finance™ ecosystem.
          It indexes token contracts, capital instruments, participant verification seals, and audit trails.
        </p>
      </div>

      {/* Offerings in ODIN Registry */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          Registered Capital Instruments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((offering) => (
            <div
              key={offering.code}
              className="p-6 rounded-2xl bg-[#0b1021] border border-[#212d4d] space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-amber-400">
                    ODIN-{offering.code}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {offering.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{offering.name}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {offering.summary}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
                <span>Type: {offering.instrumentType}</span>
                <Link href="/offerings" className="text-amber-400 hover:underline">
                  View Offering →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Registry Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-purple-400" />
          Registered Certificate Entries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#0b1021] border border-[#212d4d] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300">
                  ODIN-REG-{cert.id}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/40">
                  {cert.status}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">{cert.instrument}</h4>
              <div className="text-xs text-slate-400 space-y-1">
                <div><strong>Holder:</strong> {cert.holder}</div>
                <div><strong>Issued Date:</strong> {cert.issued}</div>
              </div>
              <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-500">OBP-1 Provenance</span>
                <div className="flex items-center gap-3">
                  <Link href={`/certificates/${cert.id}`} className="text-purple-400 hover:text-purple-300">
                    QR-V™ Seal →
                  </Link>
                  <Link href="/certificates" className="text-amber-400 hover:underline">
                    Verify Record
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ledger Registry Activity */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          Audited Ledger Records
        </h2>
        <div className="space-y-2">
          {ledgerEntries.map((entry) => (
            <div
              key={entry.reference}
              className="p-4 rounded-xl bg-[#090d1c] border border-slate-800 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-400">{entry.reference}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {entry.status}
                  </span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">{entry.activity}</div>
              </div>
              <span className="text-xs text-slate-500 font-mono">{entry.date}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
