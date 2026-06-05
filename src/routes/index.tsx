import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Truck, Palette, Award } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-merch.jpg";
import printing from "@/assets/printing.jpg";
import outdoor from "@/assets/outdoor.jpg";
import design from "@/assets/design.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joysmart Branding Services — Brand it. Wear it. Own it." },
      { name: "description", content: "Premium promotional merchandise, creative graphic design and outdoor branding solutions for businesses and organizations." },
      { property: "og:title", content: "Joysmart Branding Services" },
      { property: "og:description", content: "Premium promotional merchandise, creative graphic design and outdoor branding solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Polo T-Shirts", "Caps", "Hoodies", "Reflectors", "Umbrellas", "Water Bottles",
  "Leso & Fabrics", "Half Jackets", "Graphic Design", "Outdoor Branding",
];

const services = [
  { icon: Sparkles, title: "Promotional Merchandise", desc: "Custom-branded merchandise designed to market your brand effectively and professionally.", img: printing },
  { icon: Palette, title: "Graphic Design", desc: "Modern designs for logos, marketing materials, profiles, posters, banners and digital branding.", img: design },
  { icon: Award, title: "Outdoor Branding", desc: "Professional outdoor advertising and branding solutions that command attention.", img: outdoor },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-12 pb-20 md:grid-cols-12 md:pt-20 md:pb-28">
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Branding & Promotional Merchandise
            </div>
            <h1 className="mt-6 text-display text-[clamp(3rem,9vw,7.5rem)]">
              Brand it.<br />
              <span className="text-primary">Wear it.</span><br />
              Own it.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We turn your identity into merchandise people actually want to use —
              premium apparel, sharp design, and outdoor branding that gets seen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:scale-105">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream">
                Browse products
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="absolute -top-6 -left-6 hidden h-24 w-24 rotate-12 rounded-2xl bg-primary md:block" />
            <img src={hero} alt="Branded promotional merchandise flat lay" width={1600} height={1200} className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-brand" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-ink px-5 py-4 text-cream shadow-brand md:block">
              <div className="text-display text-3xl text-primary">500+</div>
              <div className="text-xs text-cream/70">brands trusted us</div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border bg-ink py-5 text-cream overflow-hidden">
          <div className="flex w-max gap-12 marquee whitespace-nowrap text-display text-2xl">
            {[...marqueeItems, ...marqueeItems].map((it, i) => (
              <span key={i} className="flex items-center gap-12">
                {it} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</div>
            <h2 className="mt-3 text-display text-5xl md:text-6xl">Three things,<br />done extremely well.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold underline underline-offset-4">All services →</Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group overflow-hidden rounded-3xl bg-card transition-shadow hover:shadow-brand">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Why Joysmart</div>
              <h2 className="mt-3 text-display text-5xl md:text-6xl">A reliable<br />branding partner.</h2>
              <p className="mt-6 max-w-md text-cream/70">
                We're committed to quality, creativity and customer satisfaction — turning ideas
                into impactful branded products that leave lasting impressions.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-cream/10 sm:grid-cols-2">
              {[
                ["Durable", "Quality products built to last."],
                ["Creative", "Professional, modern design."],
                ["On time", "Timely delivery, every order."],
                ["Affordable", "Competitive pricing."],
                ["Customer-first", "Service that listens."],
                ["Reliable", "A partner you can trust."],
              ].map(([title, desc]) => (
                <li key={title} className="bg-ink p-7">
                  <Truck className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-display text-2xl">{title}</div>
                  <p className="mt-1 text-sm text-cream/60">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2rem] gradient-warm p-10 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-display text-5xl text-primary-foreground md:text-7xl">Let's brand<br />something great.</h2>
            <p className="mt-4 text-primary-foreground/80">
              Tell us what you need — we'll come back with a quote, samples and a clear timeline.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-105">
              Get a free quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
