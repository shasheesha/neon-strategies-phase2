
"use client"
import CustomButton from "@/components/button/CustomButton/CustomButton";
import './style.scss';

const ParallaxBanner: React.FC = () => {

  const handleScrollToSection = (id:string) => {
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <>
        <section className="parallex-banner">
          <div className="back-image" style={{ backgroundImage: `url(/images/parallax.jpg)`}} />
          <div className="container mx-auto h-screen py-40 px-5 flex flex-row items-end justify-center md:justify-end">
            <CustomButton btnName={"Let's get in touch"} withArrow={true} onClick={() => handleScrollToSection('contact')} btnSize={"normal"} btnColor={"transparent-white"} animatColor="white" />
          </div>
        </section>
        </>
    )
}
export default ParallaxBanner;