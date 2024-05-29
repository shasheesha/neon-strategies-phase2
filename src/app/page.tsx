import GetInTouch from "@/components/sections/GetInTouch/page";
import Welcome from "@/components/sections/Welcome/page";
import Footer from "@/layout/Footer/page";
import HeaderNavigation from "@/layout/HeaderNavigation/page";

export default function Home() {
  return (
    <>
    <HeaderNavigation />
    <Welcome />
    <GetInTouch />
    <Footer />
    </>
  );
}
