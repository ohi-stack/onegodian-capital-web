'use client';

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, ShieldCheck, Check, Copy, ExternalLink, Download, Smartphone } from 'lucide-react';

interface QRVCodeGeneratorProps {
  certificateId: string;
  instrumentName: string;
  status: string;
  verificationUrl?: string;
  odinIdentifier?: string;
  size?: number;
  className?: string;
}

export default function QRVCodeGenerator({
  certificateId,
  instrumentName,
  status,
  verificationUrl,
  odinIdentifier,
  size = 200,
  className = '',
}: QRVCodeGeneratorProps) {
  const [dataUrl, setDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'scan' | 'payload'>('scan');

  // Compute canonical verification URL
  const resolvedUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/certificates/${certificateId}`
      : verificationUrl || `https://odefi.onegodian.com/certificates/${certificateId}`;

  // Structured cryptographic payload for QR-V™ verification scanning
  const verificationPayload = JSON.stringify(
    {
      protocol: 'QR-V/OBP-1',
      version: '1.0',
      certId: certificateId,
      odinId: odinIdentifier || `ODIN-REG-${certificateId}-2025-V1`,
      instrument: instrumentName,
      status: status,
      verifyUrl: resolvedUrl,
      canonicalRegistry: 'ODIN Registry™',
      network: 'OneGodian Digital Finance (ODeFi)',
      timestamp: new Date().toISOString(),
    },
    null,
    2
  );

  useEffect(() => {
    let isMounted = true;

    async function generateCode() {
      try {
        // Generate high-resolution QR with luxury dark gold/navy styling
        const url = await QRCode.toDataURL(resolvedUrl, {
          width: size * 2,
          margin: 1.5,
          color: {
            dark: '#f6d87c', // ODeFi Metallic Gold
            light: '#070b16', // Ultra-deep obsidian navy background
          },
          errorCorrectionLevel: 'H',
        });
        if (isMounted) {
          setDataUrl(url);
        }
      } catch (err) {
        console.error('Failed to generate QR-V™ code:', err);
      }
    }

    generateCode();

    return () => {
      isMounted = false;
    };
  }, [resolvedUrl, size]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(resolvedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.download = `QR-V-${certificateId}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div
      className={`rounded-2xl bg-[#070b16] border border-amber-500/30 p-5 space-y-4 shadow-xl shadow-black/40 ${className}`}
    >
      {/* Header with Protocol Badges */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <QrCode className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white">
              <span>QR-V™ Dynamic Seal</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                LIVE
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              OBP-1™ Provenance Protocol
            </div>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center bg-[#0e1428] rounded-lg p-0.5 border border-slate-800 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('scan')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeTab === 'scan'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Scan QR
          </button>
          <button
            onClick={() => setActiveTab('payload')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              activeTab === 'payload'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Payload
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      {activeTab === 'scan' ? (
        <div className="flex flex-col items-center justify-center space-y-3 py-1">
          <div className="relative group p-2 rounded-xl bg-gradient-to-b from-[#111933] to-[#090e1c] border border-amber-500/40 shadow-inner">
            {dataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={dataUrl}
                alt={`QR-V Code for ${certificateId}`}
                width={size}
                height={size}
                className="rounded-lg transition-transform group-hover:scale-[1.02] duration-300"
              />
            ) : (
              <div
                style={{ width: size, height: size }}
                className="flex items-center justify-center text-xs text-slate-500 animate-pulse font-mono"
              >
                Synthesizing QR-V™...
              </div>
            )}

            {/* Corner security markers */}
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-amber-400"></div>
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-amber-400"></div>
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-amber-400"></div>
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-amber-400"></div>
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-mono font-semibold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Verification Ready</span>
            </div>
            <p className="text-[11px] text-slate-400 max-w-xs leading-tight">
              Scan with any mobile device camera or wallet to verify certificate issuance on the canonical registry.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
            <span>Decentralized Payload Schema:</span>
            <span className="text-purple-400">ISO/IEC 18004</span>
          </div>
          <pre className="p-3 rounded-xl bg-[#050811] border border-slate-800 text-[10px] font-mono text-amber-300 overflow-x-auto max-h-48 scrollbar-thin">
            {verificationPayload}
          </pre>
        </div>
      )}

      {/* Action Footer */}
      <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="px-3 py-1.5 rounded-lg bg-[#0e1428] hover:bg-[#16203d] border border-slate-700 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            disabled={!dataUrl}
            className="px-3 py-1.5 rounded-lg bg-[#0e1428] hover:bg-[#16203d] border border-slate-700 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>Download PNG</span>
          </button>
        </div>

        <a
          href={resolvedUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
        >
          <span>Direct Record</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
