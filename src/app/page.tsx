import About from "@/components/sections/About/page";
import GetInTouch from "@/components/sections/GetInTouch/page";
import VideoBanner from "@/components/sections/VideoBanner/page";
import Welcome from "@/components/sections/Welcome/page";
import WhatWeDo from "@/components/sections/WhatWeDo/page";
import Footer from "@/layout/Footer/page";
import HeaderNavigation from "@/layout/HeaderNavigation/page";

export default function Home() {
  return (
    <>
    <HeaderNavigation />
    <Welcome />
    {/* <VideoBanner /> */}
    <WhatWeDo />
    <About />
    <GetInTouch />
    <Footer />
    </>
  );
}
