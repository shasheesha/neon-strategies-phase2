import About from "@/components/sections/About/page";
import GetInTouch from "@/components/sections/GetInTouch/page";
import OurProcess from "@/components/sections/OurProcess/page";
// import FAQ from "@/components/sections/FAQ/page";
import Welcome from "@/components/sections/Welcome/page";
import WhatWeDo from "@/components/sections/WhatWeDo/page";
import AnimatedSection from '../components/Animation/AnimationFadeUp/page';
import ParallaxBanner from "@/components/sections/ParallexBanner/page";

export default function Home() {
  return (
    <>
    <AnimatedSection>
      <Welcome />
    </AnimatedSection>
    <AnimatedSection>
      <WhatWeDo />
    </AnimatedSection>
    <AnimatedSection>
      <About />
    </AnimatedSection>
    <ParallaxBanner />
    {/* <AnimatedSection>
      <FAQ />
    </AnimatedSection> */}
    <AnimatedSection>
      <OurProcess />
    </AnimatedSection>
    <AnimatedSection>
      <GetInTouch />
    </AnimatedSection>
    </>
  );
}
