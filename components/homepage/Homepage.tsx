import { HomepageHeader } from "./HomepageHeader";
import { HomepageHero } from "./HomepageHero";
import { HomepageFooter } from "./HomepageFooter";

export function Homepage() {
  return (
    <div className="home-page relative min-h-screen w-full overflow-x-hidden">
      <HomepageHeader />
      <HomepageHero />
      <HomepageFooter />
    </div>
  );
}
