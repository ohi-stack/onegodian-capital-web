import Link from 'next/link';
import PageShell from '@/components/PageShell';
import type { CapitalPage } from '@/data/capitalPages';

export default function CapitalInfoPage({ page }: Readonly<{ page: CapitalPage }>) {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">{page.eyebrow}</div>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          <div className="cta-row">
            {page.ctas.map((cta) => (
              <Link className="button" href={cta.href} key={cta.href}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {page.notice ? (
        <section className="page-section">
          <div className="notice">
            <strong>Important notice:</strong> {page.notice}
          </div>
        </section>
      ) : null}

      <section className="page-section">
        <div className="grid">
          {page.sections.map((section) => (
            <article className="card" key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
