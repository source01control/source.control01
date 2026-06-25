import { Header } from "@/components/Header";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="relative flex-1">{children}</main>
      <HomepageFooter />
    </div>
  );
}
