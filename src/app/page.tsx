import GetInTouch from "@/components/sections/GetInTouch/page";
import Welcome from "@/components/sections/Welcome/page";
import Footer from "@/layout/footer/page";
import "@/styles/home.scss";

export default function Home() {
  return (
    <>
    <Welcome />
    <GetInTouch />
    <Footer />
    </>
  );
}
