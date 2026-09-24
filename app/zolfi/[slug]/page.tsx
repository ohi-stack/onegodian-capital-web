import Link from 'next/link';
import { getZolfiService, zolfiDisclosure, zolfiServices } from '../data';
import { ShieldCheck, ArrowLeft, CheckCircle2, Lock, FileText } from 'lucide-react';

export function generateStaticParams() {
  return zolfiServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getZolfiService(slug);

  return {
    title: service ? `${service.title} | ODeFi™ Security Architecture` : 'Zolfi™ Module | ODeFi™',
    description: service?.summary || 'Zolfi™ capital infrastructure module.',
  };
}

export default async function ZolfiModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getZolfiService(slug);

  if (!service) {
    return (
      <main className="min-h-screen py-16 px-4 text-center">
        <h1 className="text-2xl font-bold text-white">Module Not Found</h1>
        <p className="text-slate-400 mt-2">This Zolfi module is not registered in the ODeFi catalog.</p>
        <Link href="/zolfi" className="btn-gold px-4 py-2 mt-4 inline-block text-xs uppercase tracking-wider font-bold">
          Return to Zolfi
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="space-y-4">
        <Link href="/zolfi" className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Zolfi Catalog
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zolfi™ Module</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white">
          {service.title}
        </h1>
        <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
          {service.summary}
        </p>

        <div className="flex items-center gap-3 pt-2">
          <Link href="/disclosures" className="btn-secondary px-4 py-2 text-xs uppercase tracking-wider font-bold">
            Review Disclosures
          </Link>
          <Link href="/certificates" className="btn-gold px-4 py-2 text-xs uppercase tracking-wider font-bold">
            Verify Certificates
          </Link>
        </div>
      </div>

      {/* Deliverables */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Technical Deliverables & Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#0b1021] border border-[#212d4d] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white">{item}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Standardized component compliant with OBP-1™ verification criteria.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boundary */}
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
