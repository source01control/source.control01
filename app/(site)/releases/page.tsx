import type { Metadata } from "next";
import { ReleaseArchive } from "@/components/releases/ReleaseArchive";

export const metadata: Metadata = {
  title: "Releases",
  description:
    "SOURCE CONTROL catalogue — vinyl, digital, and cassette releases.",
};

export default function ReleasesPage() {
  return (
    <div className="w-full">
      <ReleaseArchive />
    </div>
  );
}
