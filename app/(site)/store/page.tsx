import type { Metadata } from "next";
import { StoreCatalog } from "@/components/store/StoreCatalog";
import { StoreHero } from "@/components/store/StoreHero";

export const metadata: Metadata = {
  title: "Store",
  description: "SOURCE CONTROL store — digital releases and merchandise.",
};

export default function StorePage() {
  return (
    <div className="store-page w-full bg-black">
      <StoreHero />
      <StoreCatalog />
    </div>
  );
}
