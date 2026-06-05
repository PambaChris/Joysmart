import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Sparkles, Palette, Award, ArrowUpRight } from "lucide-react";
import printing from "@/assets/printing.jpg";
import design from "@/assets/design.jpg";
import outdoor from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Joysmart Branding Services" },
      { name: "description", content: "Promotional merchandise branding, graphic design and outdoor branding services from Joysmart." },
      { property: "og:title", content: "Services — Joysmart Branding Services" },
      { property: "og:description", content: "Promotional merchandise, graphic design and outdoor branding." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Sparkles, n: "01", title: "Promotional Merchandise Branding", img: printing,
    desc: "Custom-branded merchandise designed to market your brand effectively and professionally — printed, embroidered or engraved with precision.",
    items: ["Screen printing", "Embroidery", "Heat transfer", "Engraving"],
  },
  {
    icon: Palette, n: "02", title: "Graphic Design", img: design,
    desc: "Creative and modern designs for logos, marketing materials, company profiles, posters, banners and digital branding.",
    items: ["Logo design", "Company profiles", "Posters & banners", "Digital branding"],
  },
  {
    icon: Award, n: "03", title: "Outdoor Branding", img: outdoor,
    desc: "Professional outdoor advertising and branding solutions that increase brand visibility and attract attention.",
    items: ["Billboards", "Signage", "Vehicle branding", "Banners & flags"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Services</div>
        <h1 className="mt-3 max-w-4xl text-display text-5xl md:text-7xl">
          Everything your brand needs to <span className="text-primary">show up.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-24">
        {services.map((s, i) => (
          <article key={s.n} className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="aspect-[5/4] w-full rounded-3xl object-cover shadow-brand" />
            </div>
            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-display text-primary">
                <s.icon className="h-6 w-6" />
                <span>{s.n}</span>
              </div>
              <h2 className="mt-4 text-display text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {s.items.map((it) => (
                  <li key={it} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-ink p-10 text-cream md:p-16">
          <h2 className="max-w-2xl text-display text-4xl md:text-6xl">Got a project? Let's price it.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">
            Request a quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
