import Image from "next/image";
import Hero from "./component/hero/hero";
import About from "./component/about/about";
import Feature from "./component/feature/feature";
import Service from "./component/service/service";
import Pricing from "./component/pricing/pricing";

export default function Home() {
  return (
    <div>
    <Hero />
    <About />
    <Feature />
    <Service />
    <Pricing />
    </div>
  );
}
