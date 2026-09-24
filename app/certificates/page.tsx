'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { certificates } from '../data';
import QRVCodeGenerator from '../components/QRVCodeGenerator';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  ExternalLink,
  QrCode,
  Lock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCert, setExpandedCert] = useState<string | null>('OGC-CERT-0001');

  const filteredCerts = certificates.filter(
    (c) =>
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instrument.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.holder.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>OBP-1™ Provenance & Verification Layer</span>
          <span>•</span>
          <span>QR-V™ Integrated</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Certificate Verification & QR-V™ Provenance
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          Verify ONEGODIAN Capital and ODeFi certificate authenticity, instrument association, holder record
          status, and cryptographic issuance logs. Scan the dynamic QR-V™ code on any mobile device for instant provenance confirmation.
        </p>
      </div>

      {/* Interactive Certificate Lookup */}
      <div className="p-6 rounded-2xl bg-[#0c1225] border border-amber-500/30 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Search className="w-5 h-5 text-amber-400" />
          Authoritative Certificate Query
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by Certificate ID (e.g. OGC-CERT-0001) or Instrument Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#070b16] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 font-mono"
            />
          </div>
          <button
            onClick={() => setSearchQuery(searchQuery.trim())}
            className="btn-gold px-6 py-3 text-xs uppercase tracking-wider font-extrabold"
          >
            Verify Record
          </button>
        </div>
        <p className="text-[11px] text-slate-400">
          Querying canonical ODIN Registry™ and OBP-1™ cryptographic logs. Real-time verification status: <span className="text-emerald-400 font-semibold font-mono">ONLINE</span>.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Active Certificate Records</h3>
          <span className="text-xs font-mono text-slate-400">
            {filteredCerts.length} record(s) indexed
          </span>
        </div>

        <div className="space-y-6">
          {filteredCerts.map((cert) => {
            const isExpanded = expandedCert === cert.id;

            return (
              <div
                key={cert.id}
                className={`rounded-2xl bg-[#0b1021] border transition-all overflow-hidden ${
                  isExpanded
                    ? 'border-amber-400/80 shadow-2xl shadow-amber-500/10'
                    : 'border-[#212d4d] hover:border-amber-500/40'
                }`}
              >
                {/* Collapsed/Header summary */}
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-amber-400">
                        {cert.id}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          cert.status === 'Verified'
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-700/40'
                            : 'bg-amber-950 text-amber-300 border-amber-700/40'
                        }`}
                      >
                        {cert.status}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300">
                        OBP-1™ Verified
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{cert.instrument}</h4>
                    <div className="text-xs text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span><strong>Holder:</strong> {cert.holder}</span>
                      <span>•</span>
                      <span><strong>Issuance:</strong> {cert.issued}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/certificates/${cert.id}`}
                      className="px-3.5 py-2 rounded-xl bg-[#0e1428] hover:bg-[#16203d] border border-slate-700 text-xs font-mono text-amber-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Dedicated View</span>
                    </Link>

                    <button
                      onClick={() => setExpandedCert(isExpanded ? null : cert.id)}
                      className="btn-gold px-4 py-2 text-xs uppercase tracking-wider font-extrabold flex items-center gap-1.5"
                    >
                      <QrCode className="w-4 h-4" />
                      <span>{isExpanded ? 'Hide QR-V™' : 'Generate QR-V™'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Interactive Section with dynamic QR-V Generator */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-[#080d1a] border-t border-slate-800/80 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      {/* Left: Metadata and Cryptographic Proof */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="p-4 rounded-xl bg-[#050811] border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-400">Canonical Registry ID:</span>
                            <span className="text-amber-300 font-bold">ODIN-REG-{cert.id}-2025-V1</span>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-400">Provenance Protocol:</span>
                            <span className="text-purple-300">OBP-1 / QR-V Bridge v1.0</span>
                          </div>
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-400">Smart Contract Anchor:</span>
                            <span className="text-slate-300 truncate max-w-[220px]">0x9eee...ce98 (ODC)</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#050811] border border-slate-800 space-y-1.5">
                          <div className="text-[10px] uppercase font-mono text-slate-500 font-bold">
                            OBP-1™ Cryptographic Audit Hash:
                          </div>
                          <div className="p-2.5 rounded bg-[#020408] border border-slate-800/80 font-mono text-[11px] text-emerald-400 break-all select-all">
                            0x7d3e91b5c92f8a4e1074a3b1d9842c678a3e91b2c4d5e6f7a8b9c0d1e2f3a4b5
                          </div>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed">
                          Scan the dynamic QR-V™ seal with a mobile phone to confirm valid recordkeeping on the ONEGODIAN ODIN Registry™. Records link directly to the cryptographic audit trail.
                        </p>
                      </div>

                      {/* Right: Dynamic QR-V™ Generator Component */}
                      <div className="lg:col-span-5 flex justify-center">
                        <QRVCodeGenerator
                          certificateId={cert.id}
                          instrumentName={cert.instrument}
                          status={cert.status}
                          verificationUrl={cert.verificationUrl}
                          odinIdentifier={`ODIN-REG-${cert.id}-2025-V1`}
                          size={190}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Verification Notice Banner */}
      <div className="p-6 rounded-2xl bg-[#090d1c] border border-slate-800 text-xs text-slate-400 space-y-2">
        <h4 className="font-bold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          Authoritative Verification Notice
        </h4>
        <p className="leading-relaxed">
          Certificate verification confirms that a cryptographic record is active in the ONEGODIAN Capital and
          ODIN Registry™ recordkeeping layer. Verification does not independently guarantee market price, liquidity,
          or secondary exchange listing. All activity remains subject to qualified investor disclosure review.
        </p>
      </div>
    </main>
  );
}
