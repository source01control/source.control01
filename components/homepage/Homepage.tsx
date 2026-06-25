import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HomepageHeader } from "./HomepageHeader";
import { HomepageHero } from "./HomepageHero";
import { HomepageFooter } from "./HomepageFooter";

export function Homepage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
      <GlitchOverlay />
      <HomepageHeader />
      <HomepageHero />
      <HomepageFooter />
    </div>
  );
}
