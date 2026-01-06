import Hero from "../landing-page/components/hero";
import AsocHero from "./components/hero";
import Timeline from "./components/how-asoc";

export function Asoc() {
  return (
    <div className="w-full overflow-visible">
      <AsocHero />
      <Timeline />
    </div>
  );
}
