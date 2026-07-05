import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoreProductDetail } from "@/components/store/StoreProductDetail";
import { getReleaseForStoreProduct, getStoreProductById, storeProducts } from "@/lib/store";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return storeProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getStoreProductById(id);

  if (!product) return { title: "Not Found" };

  const description = product.artist
    ? `${product.artist} — ${product.title}`
    : product.title;

  return {
    title: product.title,
    description,
    openGraph: {
      title: `${product.title} | SOURCE CONTROL Store`,
      description,
      type: "website",
      images: [{ url: product.image, alt: product.alt }],
    },
  };
}

export default async function StoreProductPage({ params }: Props) {
  const { id } = await params;
  const product = getStoreProductById(id);

  if (!product) notFound();

  const release = getReleaseForStoreProduct(product);

  return (
    <div className="store-page w-full bg-black">
      <StoreProductDetail product={product} release={release} />
    </div>
  );
}
