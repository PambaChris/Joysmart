import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Suspense } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const productsQuery = queryOptions({
  queryKey: ["shopify", "products"],
  queryFn: () => fetchProducts(50),
});

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Store — Joysmart Branding Services" },
      { name: "description", content: "Shop branded promotional merchandise online — polos, caps, bottles, umbrellas and more." },
      { property: "og:title", content: "Store — Joysmart Branding Services" },
      { property: "og:description", content: "Shop branded promotional merchandise online." },
    ],
    links: [{ rel: "canonical", href: "/store" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(productsQuery),
  component: StorePage,
});

function StorePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">Online Store</div>
        <h1 className="mt-3 text-display text-5xl md:text-7xl">
          Shop our <span className="text-primary">branded goods.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Order ready-stock items directly. Need custom branding? Add items to cart and we'll confirm artwork before production.
        </p>
      </section>

      <Suspense
        fallback={
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        }
      >
        <ProductsGrid />
      </Suspense>
    </SiteLayout>
  );
}

function ProductsGrid() {
  const { data: products } = useSuspenseQuery(productsQuery);

  if (!products || products.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border-2 border-dashed border-border bg-card p-16 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-6 text-display text-3xl">No products found</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            We're still stocking the shelves. Check back soon or get in touch for a custom branding quote.
          </p>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream">
            Request a quote →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.node.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return (
    <Link
      to="/product/$handle"
      params={{ handle: product.node.handle }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-brand"
    >
      <div className="aspect-square overflow-hidden bg-secondary/10">
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? product.node.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <ShoppingBag className="h-12 w-12" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-display text-xl leading-tight">{product.node.title}</h3>
        <div className="text-lg font-semibold text-primary">
          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
        </div>
        <Button onClick={handleAdd} disabled={isLoading || !variant?.availableForSale} className="mt-auto">
          {!variant?.availableForSale ? "Sold out" : isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add to cart"}
        </Button>
      </div>
    </Link>
  );
}
