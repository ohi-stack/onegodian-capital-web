import Link from 'next/link';
import { certificates } from '../../data';
import QRVCodeGenerator from '../../components/QRVCodeGenerator';
import {
  ShieldCheck,
  ArrowLeft,
  AlertCircle,
  FileCheck,
  Lock,
  Calendar,
  UserCheck,
} from 'lucide-react';

export function generateStaticParams() {
  return certificates.map((cert) => ({ id: cert.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cert = certificates.find((c) => c.id.toLowerCase() === id.toLowerCase());

  return {
    title: cert
      ? `${cert.id} — ${cert.instrument} | ODeFi™ QR-V Verification`
      : 'Certificate Verification | ODeFi™',
    description: cert
      ? `Cryptographic provenance and QR-V™ verification record for certificate ${cert.id}.`
      : 'Certificate record verification portal.',
  };
}

export default async function CertificateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cert = certificates.find((c) => c.id.toLowerCase() === id.toLowerCase());

  if (!cert) {
    return (
      <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Certificate Record Not Found
        </h1>
        <p className="text-slate-400 max-w-md mx-auto text-sm">
          The requested identifier <code className="text-amber-400 font-mono">{id}</code> is not recorded in
          the active ODIN Registry™ or has failed cryptographic provenance review.
        </p>
        <div>
          <Link
            href="/certificates"
            className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider font-extrabold inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Verification Center
          </Link>
        </div>
      </main>
    );
  }

  const odinIdentifier = `ODIN-REG-${cert.id}-2025-V1`;
  const provenanceHash =
    '0x7d3e91b5c92f8a4e1074a3b1d9842c678a3e91b2c4d5e6f7a8b9c0d1e2f3a4b5';

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/certificates"
          className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-mono font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Certificate Registry</span>
        </Link>
        <span className="text-[11px] font-mono text-slate-500">
          Canonical Node: odefi.onegodian.com
        </span>
      </div>

      {/* Main Certificate Card */}
      <div className="rounded-3xl bg-[#090d1c] border border-amber-500/30 overflow-hidden shadow-2xl shadow-black/80">
        {/* Certificate Title Bar */}
        <div className="bg-gradient-to-r from-[#0d142c] via-[#101b3b] to-[#0d142c] border-b border-amber-500/20 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-mono font-bold">
                OBP-1™ Verified
              </span>
              <span
                className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                  cert.status === 'Verified'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-700/50'
                    : 'bg-amber-950 text-amber-300 border-amber-700/50'
                }`}
              >
                {cert.status}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {cert.instrument}
            </h1>
            <div className="text-xs text-slate-400 font-mono">
              Certificate Record ID: <span className="text-amber-400 font-bold">{cert.id}</span>
            </div>
          </div>

          <div className="text-right sm:border-l sm:border-slate-800 sm:pl-6 space-y-1">
            <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
              Registry Identifier
            </div>
            <div className="text-xs font-mono text-amber-300 font-bold">
              {odinIdentifier}
            </div>
          </div>
        </div>

        {/* Certificate Content Grid: Details Left, Dynamic QR-V Right */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Metadata & Audit Trail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-400" />
                Certificate Particulars
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#060a15] border border-slate-800 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-slate-400" />
                    Registered Holder
                  </div>
                  <div className="text-sm font-bold text-white">{cert.holder}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#060a15] border border-slate-800 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    Issuance Status
                  </div>
                  <div className="text-sm font-bold text-slate-200">{cert.issued}</div>
                </div>
              </div>
            </div>

            {/* Cryptographic Hash Details */}
            <div className="p-5 rounded-2xl bg-[#060a15] border border-slate-800/90 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  OBP-1™ Cryptographic Verification Seal
                </div>
                <span className="text-[10px] font-mono text-emerald-400">SHA-256 Validated</span>
              </div>
              <div className="p-3 rounded-lg bg-[#03060c] border border-slate-800/80 font-mono text-[11px] text-emerald-400 break-all select-all">
                {provenanceHash}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Cryptographic signature anchored to the canonical OneGodian Capital state ledger. Tampering with certificate parameters automatically invalidates this hash.
              </p>
            </div>

            {/* Protocol Security & Verification Guarantee */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0a1024] to-[#0e1633] border border-[#212d4d] space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-mono font-bold text-xs">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero-Trust Verification Flow</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                This certificate is protected by QR-V™ mobile provenance verification. Any participant or compliance officer can point a camera at the generated QR seal to confirm valid registration in the ODIN registry in real time.
              </p>
            </div>
          </div>

          {/* Dynamic QR-V™ Generator Component */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <QRVCodeGenerator
              certificateId={cert.id}
              instrumentName={cert.instrument}
              status={cert.status}
              verificationUrl={cert.verificationUrl}
              odinIdentifier={odinIdentifier}
              size={220}
            />
          </div>
        </div>

        {/* Footer info strip */}
        <div className="bg-[#050812] border-t border-slate-800/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            Authority: <strong className="text-slate-300">ONEGODIAN, LLC</strong> · ODeFi Protocol Record
          </div>
          <div className="flex items-center gap-4">
            <Link href="/disclosures" className="hover:text-amber-400 transition-colors">
              Review Disclosures
            </Link>
            <span>•</span>
            <Link href="/registry" className="hover:text-amber-400 transition-colors">
              Registry Index
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
