import About from "@/components/sections/About/page";
import GetInTouch from "@/components/sections/GetInTouch/page";
import OurProcess from "@/components/sections/OurProcess/page";
import FAQ from "@/components/sections/FAQ/page";
import VideoBanner from "@/components/sections/VideoBanner/page";
import Welcome from "@/components/sections/Welcome/page";
import WhatWeDo from "@/components/sections/WhatWeDo/page";
import Footer from "@/layout/Footer/page";
import HeaderNavigation from "@/layout/HeaderNavigation/page";
import AnimatedSection from '../components/Animation/AnimationFadeUp/page';
import ParallaxBanner from "@/components/sections/ParallexBanner/page";

export default function Home() {
  return (
    <>
    <HeaderNavigation />
    <AnimatedSection>
      <Welcome />
    </AnimatedSection>
    {/* <VideoBanner /> */}
    <AnimatedSection>
      <WhatWeDo />
    </AnimatedSection>
    <AnimatedSection>
      <About />
    </AnimatedSection>
    <ParallaxBanner />
    <AnimatedSection>
      <FAQ />
    </AnimatedSection>
    <AnimatedSection>
      <OurProcess />
    </AnimatedSection>
    <AnimatedSection>
      <GetInTouch />
    </AnimatedSection>
    <Footer />
    </>
  );
}
