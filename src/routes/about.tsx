import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import printing from "@/assets/printing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Joysmart Branding Services" },
      { name: "description", content: "Joysmart Branding Services is a trusted branding and promotional merchandise company helping businesses build strong, memorable brands." },
      { property: "og:title", content: "About — Joysmart Branding Services" },
      { property: "og:description", content: "Trusted branding and promotional merchandise partner." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">About us</div>
        <h1 className="mt-3 max-w-4xl text-display text-5xl md:text-7xl">
          A trusted partner for brands that want to be <span className="text-primary">remembered.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-2">
        <img src={printing} alt="Joysmart studio at work" loading="lazy" width={1200} height={900} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-brand" />
        <div className="flex flex-col justify-center gap-6 text-lg text-muted-foreground">
          <p>
            JOYSMART Branding Services is a trusted branding and promotional merchandise
            company dedicated to helping businesses, organizations, institutions and
            individuals build strong and memorable brands.
          </p>
          <p>
            We specialize in high-quality promotional products, creative branding
            solutions and professional graphic design services tailored to meet diverse
            marketing and corporate identity needs.
          </p>
          <p className="text-foreground">
            With a commitment to quality, creativity and customer satisfaction, we
            transform ideas into impactful branded products that enhance visibility and
            leave lasting impressions.
          </p>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Our mission</div>
              <h2 className="mt-3 text-display text-4xl">Empower brands to stand out and grow.</h2>
            </div>
            <p className="md:col-span-2 text-xl text-cream/80">
              To provide innovative, high-quality and affordable branding solutions
              that empower businesses and organizations to stand out and grow — through
              merchandise, design and outdoor presence that's unmistakably theirs.
            </p>
          </div>
          <Link to="/contact" className="mt-12 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">
            Work with us →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
