'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '../lib/AuthContext';
import {
  ChevronDown,
  ShieldCheck,
  Wallet,
  Coins,
  ArrowRightLeft,
  FileCheck,
  Scale,
  Code2,
  BookOpen,
  LogIn,
  LogOut,
  User,
  LayoutDashboard,
  Search,
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  Building2,
  CheckCircle2,
  Menu,
  X,
  CreditCard,
  Briefcase
} from 'lucide-react';

interface MegaMenuSection {
  title: string;
  badge?: string;
  items: {
    label: string;
    href: string;
    desc?: string;
    tag?: string;
    icon: any;
    external?: boolean;
  }[];
}

const MENU_CONFIG: Record<string, MegaMenuSection[]> = {
  finance: [
    {
      title: 'Platform Modules',
      items: [
        { label: 'OneGodian Finance Dashboard™', href: '/investor-portal', desc: 'Unified financial asset and account control center', icon: LayoutDashboard, tag: 'Active' },
        { label: 'ODFID™ Financial Identity', href: '/identity/odfid', desc: 'Secure identity, eligibility, & verification layer', icon: User, tag: 'Native' },
        { label: 'OBP-1™ Provenance & Verification', href: '/certificates', desc: 'Cryptographic proof, audit trails, & certificates', icon: ShieldCheck, tag: 'Active' },
        { label: 'ODIN Registry™ Records', href: '/registry', desc: 'Authoritative canonical identifier & record layer', icon: BookOpen, tag: 'Registry' },
      ],
    },
    {
      title: 'Commercial Infrastructure',
      items: [
        { label: 'Merchant Solutions', href: '/merchant', desc: 'Payment terminals, digital invoices & settlement', icon: CreditCard, tag: 'Ready' },
        { label: 'Payments & Transfers', href: '/payments', desc: 'Non-custodial digital asset transfer engine', icon: ArrowRightLeft },
        { label: 'Treasury & Reserves', href: '/treasury', desc: 'Capital allocation, liquidity reserves & audits', icon: Briefcase },
        { label: 'System Operating Status', href: '/production-readiness', desc: 'Continuous health check & readiness gates', icon: Layers, tag: 'Live 99.9%' },
      ],
    },
  ],
  wallet: [
    {
      title: 'OBW-1™ Non-Custodial Interface',
      items: [
        { label: 'Wallet Overview', href: '/investor-portal', desc: 'Connect third-party web3 or hardware wallets', icon: Wallet, tag: 'Non-Custodial' },
        { label: 'Portfolio & Balances', href: '/investor-portal', desc: 'Track ODC, ETH, USDC, and registered assets', icon: Coins },
        { label: 'Security & Key Independence', href: '/disclosures', desc: 'Zero key storage. Private keys never touch servers', icon: Lock, tag: 'Hardened' },
        { label: 'Receive & QR-V™ Verification', href: '/certificates', desc: 'Public verification for incoming transactions', icon: FileCheck },
      ],
    },
  ],
  assets: [
    {
      title: 'Digital Assets & Tokens',
      items: [
        { label: 'ODC™ (OneGodian Digital Coin)', href: '/offerings', desc: 'Ethereum ERC-20 Mainnet: 0x9eee...ce98 (Chain ID: 1)', icon: Coins, tag: 'ERC-20' },
        { label: 'Verified Capital Instruments', href: '/offerings', desc: 'Founder Notes & Infrastructure Bonds', icon: FileCheck },
        { label: 'Asset Provenance & Registry', href: '/registry', desc: 'Query ODIN canonical identifier records', icon: ShieldCheck },
        { label: 'Digital Asset Disclosures', href: '/disclosures', desc: 'Full risk factors and operational boundaries', icon: Scale },
      ],
    },
  ],
  capital: [
    {
      title: 'Consolidated Capital Platform',
      items: [
        { label: 'Capital Offerings', href: '/offerings', desc: 'Institutional notes, bonds, and infrastructure capital', icon: Building2, tag: 'Review Required' },
        { label: 'Disclosure Center', href: '/disclosures', desc: 'Mandatory electronic disclosure gates & acknowledgements', icon: Scale, tag: 'Required' },
        { label: 'Certificate Verification', href: '/certificates', desc: 'Verify certificate authenticity and instrument association', icon: CheckCircle2, tag: 'Verifiable' },
        { label: 'Production Readiness', href: '/production-readiness', desc: 'Audit checklists, legal boundaries & compliance gates', icon: Layers },
      ],
    },
  ],
  developers: [
    {
      title: 'Developer & Protocol API',
      items: [
        { label: 'API Manifest & Health', href: '/api/zolfi/manifest', desc: 'Public service manifest and endpoint health', icon: Code2, external: true },
        { label: 'Zolfi™ Security Architecture', href: '/zolfi', desc: 'Blockchain security & smart contract audit readiness', icon: ShieldCheck },
        { label: 'Integration Documentation', href: '/production-readiness', desc: 'REST endpoints, webhooks, and SDK specs', icon: BookOpen },
        { label: 'Ecosystem Standards', href: '/registry', desc: 'OBP-1, ODFID, and ODIN metadata formats', icon: Layers },
      ],
    },
  ],
};

export default function MegaMenuNavigation() {
  const pathname = usePathname();
  const { user, profile, signOut, signInWithGoogle } = useAuth();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050811]/95 backdrop-blur-md border-b border-[#1c2744] shadow-2xl'
            : 'bg-[#050811] border-b border-[#172036]'
        }`}
      >
        {/* Top Notice Bar */}
        <div className="bg-gradient-to-r from-[#0d1527] via-[#1a1233] to-[#0d1527] border-b border-[#212b45] px-4 py-1.5 text-xs text-[#94a3b8] flex justify-between items-center">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#e3bd54] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ODeFi™ Canonical Production Node
              </span>
              <span className="hidden md:inline text-slate-500">|</span>
              <span className="hidden md:inline text-slate-400">
                ODC Contract: <code className="text-amber-200/80 font-mono">0x9eee...ce98 (Ethereum Mainnet)</code>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/production-readiness" className="hover:text-[#e3bd54] transition-colors flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                All Systems Operational
              </Link>
              <Link href="/disclosures" className="hidden sm:inline hover:text-amber-300 text-slate-400">
                Compliance Disclosures
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3 group" aria-label="ODeFi OneGodian Digital Finance">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#1d163a] to-[#0a0f1d] p-1 border border-amber-500/30 group-hover:border-amber-400 transition-all flex items-center justify-center shadow-lg shadow-purple-950/40">
                  <Image
                    src="/odefi-logo.svg"
                    alt="ODeFi Emblem"
                    width={44}
                    height={44}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3B0] via-[#ECC665] to-[#C69224]">
                      ODeFi<span className="text-xs text-amber-400 align-super">™</span>
                    </span>
                  </div>
                  <span className="text-[10px] tracking-[0.24em] font-semibold text-slate-400 uppercase -mt-1 group-hover:text-amber-200/90 transition-colors">
                    OneGodian Digital Finance
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center space-x-1" aria-label="Primary Navigation">
                {[
                  { id: 'finance', label: 'Finance' },
                  { id: 'wallet', label: 'Wallet' },
                  { id: 'assets', label: 'Assets' },
                  { id: 'capital', label: 'Capital' },
                  { id: 'developers', label: 'Developers' },
                ].map((item) => (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                      onMouseEnter={() => setActiveMenu(item.id)}
                      className={`px-3.5 py-2 rounded-md text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                        activeMenu === item.id
                          ? 'text-[#fbe38e] bg-slate-900/80 shadow-inner'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMenu === item.id ? 'rotate-180 text-amber-400' : 'text-slate-400'
                        }`}
                      />
                    </button>
                  </div>
                ))}

                <Link
                  href="/disclosures"
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/40 transition-colors"
                >
                  Disclosures
                </Link>
                <Link
                  href="/certificates"
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/40 transition-colors"
                >
                  Verify
                </Link>
              </nav>
            </div>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/production-readiness"
                className="px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 flex items-center gap-1.5 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Status
              </Link>

              {user ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/investor-portal"
                    className="btn-gold px-4 py-2 text-xs uppercase tracking-wider font-bold shadow-md shadow-amber-500/10"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    Dashboard
                  </Link>

                  <div className="relative group">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0f172a] border border-amber-500/30 rounded-lg text-xs font-medium text-slate-200 hover:border-amber-400 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-purple-600 flex items-center justify-center font-bold text-white text-[11px]">
                        {user.displayName?.[0] || user.email?.[0]?.toUpperCase() || 'U'}
                      </div>
                      <span className="max-w-[100px] truncate">{user.displayName || user.email}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>
                    {/* User dropdown */}
                    <div className="absolute right-0 mt-1 w-56 py-2 bg-[#0b1224] border border-[#223055] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="px-4 py-2 border-b border-slate-800 text-xs">
                        <p className="text-slate-400">Financial Identity</p>
                        <p className="font-mono text-amber-300 font-semibold truncate">{profile?.odfid || 'ODFID-INITIALIZING'}</p>
                        <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                          {profile?.role?.toUpperCase() || 'INVESTOR'}
                        </span>
                      </div>
                      <Link
                        href="/investor-portal"
                        className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800/60 hover:text-amber-300"
                      >
                        Portfolio & Records
                      </Link>
                      <Link
                        href="/disclosures"
                        className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800/60 hover:text-amber-300"
                      >
                        Disclosures Acceptance
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="w-full text-left px-4 py-2 text-xs text-rose-400 hover:bg-rose-950/20 flex items-center gap-1.5"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAuthModalOpen(true)}
                    className="btn-secondary px-4 py-2 text-xs uppercase tracking-wider font-semibold"
                  >
                    <LogIn className="w-3.5 h-3.5 text-amber-300" />
                    Sign In
                  </button>
                  <button
                    onClick={() => setAuthModalOpen(true)}
                    className="btn-gold px-4 py-2 text-xs uppercase tracking-wider font-bold shadow-lg shadow-amber-500/10"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold"
              >
                {user ? 'Dashboard' : 'Sign In'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeMenu && MENU_CONFIG[activeMenu] && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            className="hidden lg:block absolute top-full left-0 w-full bg-[#080d1e]/98 border-b border-[#213157] backdrop-blur-xl shadow-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MENU_CONFIG[activeMenu].map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400/90">
                        {section.title}
                      </h4>
                      {section.badge && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">
                          {section.badge}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {section.items.map((item, itemIdx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            className="group p-3 rounded-xl hover:bg-slate-850/60 bg-[#0c1328]/50 border border-slate-800/50 hover:border-amber-500/40 flex items-start gap-3.5 transition-all duration-150"
                          >
                            <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/60 group-hover:border-amber-500/40 text-amber-400 group-hover:text-amber-300 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-slate-100 group-hover:text-amber-200 transition-colors">
                                  {item.label}
                                </span>
                                {item.tag && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-600/30">
                                    {item.tag}
                                  </span>
                                )}
                                {item.external && <ExternalLink className="w-3 h-3 text-slate-500" />}
                              </div>
                              {item.desc && (
                                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 group-hover:text-slate-300">
                                  {item.desc}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Canonical Ecosystem Pillar Banner */}
                <div className="rounded-2xl p-5 bg-gradient-to-br from-[#16122d] to-[#0c1224] border border-purple-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      Governance Architecture
                    </div>
                    <h4 className="text-base font-bold text-white mt-2">
                      Standard Transaction Architecture
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-mono">
                      ODFID™ Identity → OBP-1™ Verification → OBW-1™ Wallet → Digital Asset → Transaction → ODIN Registry™ Record → Dashboard → Reporting
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center justify-between text-xs">
                    <span className="text-amber-300 font-semibold">Non-Custodial Interface</span>
                    <Link href="/disclosures" className="text-purple-300 hover:text-white underline">
                      Review Disclosures
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070b19] border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {Object.entries(MENU_CONFIG).map(([key, sections]) => (
              <div key={key} className="border-b border-slate-800/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400/90 block mb-2">
                  {key}
                </span>
                <div className="space-y-1.5">
                  {sections.flatMap((s) => s.items).map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800/60 hover:text-amber-300"
                    >
                      <div className="font-semibold">{item.label}</div>
                      {item.desc && <div className="text-xs text-slate-400">{item.desc}</div>}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/offerings"
                className="w-full btn-gold py-2.5 text-xs uppercase tracking-wider font-bold text-center"
              >
                View Offerings
              </Link>
              <Link
                href="/certificates"
                className="w-full btn-secondary py-2.5 text-xs uppercase tracking-wider font-bold text-center"
              >
                Verify Certificates
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Firebase Authentication Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#0a0f1e] border border-amber-500/40 rounded-2xl shadow-2xl p-6 overflow-hidden">
            <button
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-600/20 border border-amber-400/40 mb-3 shadow-inner">
                <Image src="/odefi-logo.svg" alt="ODeFi" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                ONEGODIAN Digital Finance™
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Authenticate with ODFID™ or Google to access your Investor Dashboard, Certificate Records, and Portfolios.
              </p>
            </div>

            <AuthModalContent onClose={() => setAuthModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

function AuthModalContent({ onClose }: { onClose: () => void }) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithGoogle();
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Failed to authenticate with Google.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      setLoading(true);
      setError(null);
      if (isRegistering) {
        await signUpWithEmail(email, password, name);
      } else {
        await signInWithEmail(email, password);
      }
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Authentication error. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs leading-relaxed">
          {error}
        </div>
      )}

      {/* Google Sign In Button */}
      <button
        onClick={handleGoogleAuth}
        disabled={loading}
        className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm flex items-center justify-center gap-3 transition-colors shadow-lg"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        Continue with Google
      </button>

      <div className="flex items-center my-4">
        <div className="flex-1 border-t border-slate-800"></div>
        <span className="px-3 text-xs text-slate-500 uppercase tracking-widest font-mono">
          Or ODFID™ Credentials
        </span>
        <div className="flex-1 border-t border-slate-800"></div>
      </div>

      <form onSubmit={handleEmailAuth} className="space-y-3">
        {isRegistering && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Full Legal Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alexander Hamilton"
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate or Investor Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="participant@domain.com"
            className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Secure Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="w-full px-3 py-2 text-sm rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-gold py-2.5 text-xs uppercase tracking-wider font-bold mt-2"
        >
          {loading ? 'Authenticating...' : isRegistering ? 'Create ODFID™ Account' : 'Sign In to Portal'}
        </button>
      </form>

      <div className="text-center pt-2">
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-xs text-amber-400/90 hover:text-amber-300 underline font-medium"
        >
          {isRegistering
            ? 'Already have an account? Sign in'
            : 'New participant or investor? Register here'}
        </button>
      </div>

      <div className="border-t border-slate-800/80 pt-3 text-[11px] text-slate-500 text-center leading-relaxed">
        Non-custodial infrastructure. By authenticating, you acknowledge the{' '}
        <Link href="/disclosures" className="text-amber-300 hover:underline">
          ONEGODIAN Disclosure Statements
        </Link>{' '}
        and understand that assets are not insured by government entities.
      </div>
    </div>
  );
}
