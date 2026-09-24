import type { Metadata } from 'next';
import Link from 'next/link';
import MegaMenuNavigation from './components/MegaMenuNavigation';
import { AuthProvider } from './lib/AuthContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'ODeFi™ — OneGodian Digital Finance | Finance Without Borders',
  description: 'Canonical decentralized finance protocol, transaction platform, OBW-1™ wallet interface, ODFID™ financial identity, and OBP-1™ verification infrastructure.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://odefi.onegodian.com'),
  icons: {
    icon: '/odefi-logo.svg',
    shortcut: '/odefi-logo.svg',
    apple: '/odefi-logo.svg',
  },
  openGraph: {
    title: 'ODeFi™ — OneGodian Digital Finance',
    description: 'Finance Without Borders: Decentralized finance, non-custodial wallet infrastructure, verifiable certificates, and digital assets.',
    url: 'https://odefi.onegodian.com',
    siteName: 'ODeFi.OneGodian.com',
    images: [
      {
        url: '/odefi-logo.svg',
        width: 1200,
        height: 630,
        alt: 'ODeFi™ Emblem Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/odefi-logo.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#050811] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-amber-500/20 selection:text-amber-200">
        <AuthProvider>
          <MegaMenuNavigation />
          <div className="flex-1">{children}</div>

          <footer className="border-t border-slate-800 bg-[#04060d] py-12 text-slate-400 text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-extrabold text-base font-mono tracking-wider">
                      ODeFi™
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      v1.0-RC
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Canonical decentralized finance protocol, non-custodial wallet interfaces, verifiable record layer, and capital compliance infrastructure.
                  </p>
                  <p className="font-mono text-[11px] text-amber-300/80">
                    ONEGODIAN, LLC · Private Commercial Infrastructure
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-200 uppercase tracking-wider mb-3">Core Modules</h4>
                  <ul className="space-y-2">
                    <li><Link href="/investor-portal" className="hover:text-amber-300">Finance Dashboard™</Link></li>
                    <li><Link href="/investor-portal" className="hover:text-amber-300">OBW-1™ Non-Custodial Wallet</Link></li>
                    <li><Link href="/certificates" className="hover:text-amber-300">OBP-1™ Provenance & Verification</Link></li>
                    <li><Link href="/registry" className="hover:text-amber-300">ODIN Registry™ Records</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-200 uppercase tracking-wider mb-3">Capital & Trust</h4>
                  <ul className="space-y-2">
                    <li><Link href="/offerings" className="hover:text-amber-300">Capital Offerings</Link></li>
                    <li><Link href="/disclosures" className="hover:text-amber-300">Disclosure Center</Link></li>
                    <li><Link href="/production-readiness" className="hover:text-amber-300">Production Readiness</Link></li>
                    <li><Link href="/zolfi" className="hover:text-amber-300">Zolfi™ Security Architecture</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-200 uppercase tracking-wider mb-3">Disclosures & Boundaries</h4>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Non-custodial by design. ONEGODIAN, LLC does not hold user keys, execute unauthorized custody, or guarantee market yields. Review all disclosure packets prior to participation.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs text-slate-300 font-mono">Status: Production Live</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-[11px]">
                  © {new Date().getFullYear()} ONEGODIAN, LLC. All rights reserved. ODeFi™, OBW-1™, ODFID™, OBP-1™, and ODIN Registry™ are trademarks of ONEGODIAN, LLC.
                </p>
                <div className="flex items-center gap-4 text-[11px]">
                  <Link href="/disclosures" className="hover:text-slate-300">Disclosures</Link>
                  <Link href="/production-readiness" className="hover:text-slate-300">Readiness</Link>
                  <Link href="/api/zolfi/manifest" className="hover:text-slate-300">API Manifest</Link>
                </div>
              </div>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
