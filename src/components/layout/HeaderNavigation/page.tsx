'use client'
import Image from "next/image";
import Link from "next/link";
import './headerNavigation.scss';
import CustomButton from "@/components/button/CustomButton/CustomButton";
import { useState } from "react";

const HeaderNavigation: React.FC = () =>{

    const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  
    const toggleServicesDropdown = () => {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };
  
  
  
    const toggleMegamenu = () => {
      setIsMegamenuOpen(!isMegamenuOpen);
    };
  
    const handleScrollToSection = (id:string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if(isMegamenuOpen){
          setIsMegamenuOpen(!isMegamenuOpen);
        }
        if(isServicesDropdownOpen){
          setIsServicesDropdownOpen(!isServicesDropdownOpen);
        }
  
      }
    };

    return(
        <>
        <nav className="header-navigation">
            <div className="container">
                <div className="content-wrap">
                    <div className="logo-wrap">
                        <Link href="./">
                            <Image priority className="logo" src="./logo.svg" width={540} height={180} alt="Neon Strategies"/>
                        </Link>
                    </div>
                    <div className="nav-wrap main-menu">
                        <ul className="nav-list">
                          <li>
                            <div onClick={() => handleScrollToSection('about')} className="nav-list-item">About</div>
                          </li>
                          <li className="droplist-wrap">
                            <div onClick={toggleServicesDropdown} className="nav-list-item">Services</div>
                              <ul className={`droplist ${isServicesDropdownOpen ? 'expand' : null}`}>
                                <li>
                                  <div onClick={() => handleScrollToSection('digital-marketing')} className="droplist-item">Digital Marketing</div>
                                </li>
                                <li>
                                  <div onClick={() => handleScrollToSection('branding')} className="droplist-item">Branding</div>
                                </li>
                                <li>
                                  <div onClick={() => handleScrollToSection('creative-services')} className="droplist-item">Creative Services</div>
                                </li>
                              </ul>
                          </li>
                          <li>
                            <div onClick={() => handleScrollToSection('process')} className="nav-list-item">Process</div>
                          </li>
                          <li>
                            <div onClick={() => handleScrollToSection('faq')} className="nav-list-item">FAQ</div>
                          </li>
                          <li>
                            <div onClick={() => handleScrollToSection('contact')} className="nav-list-item">Contact</div>
                          </li>
                        </ul>
                    </div>
                    <div className="btn-wrap">
                        <div className="contact-btn">
                            <CustomButton btnName={"Let's Talk"} btnSize={"small"} btnColor={"primary"} animatColor="white" />
                        </div>
                         <div className={`menu-icon ${isMegamenuOpen ? 'open' : null}`} onClick={toggleMegamenu}>
                           <div className="line-path"></div>
                           <div className="line-path"></div>
                           <div className="line-path"></div>
                         </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu ${isMegamenuOpen ? 'expand' : null}`}>
                  <div className="container">
                    <div className="content-wrap">
                        <ul className="nav-list">
                          <li>
                            <div onClick={() => handleScrollToSection('about')} className="nav-list-item">About</div>
                          </li>
                          <li className="droplist-wrap">
                            <div onClick={toggleServicesDropdown} className="nav-list-item">Services</div>
                            <ul className={`mb-droplist ${isServicesDropdownOpen ? 'expand' : null}`}>
                                <li>
                                  <div onClick={() => handleScrollToSection('digital-marketing')} className="nav-list-item">Digital Marketing</div>
                                </li>
                                <li>
                                  <div onClick={() => handleScrollToSection('branding')} className="nav-list-item">Branding</div>
                                </li>
                                <li>
                                  <div onClick={() => handleScrollToSection('creative-services')} className="nav-list-item">Creative Services</div>
                                </li>
                              </ul>
                          </li>
                          <li>
                            <div onClick={() => handleScrollToSection('process')} className="nav-list-item">Process</div>
                          </li>
                          <li>
                            <div onClick={() => handleScrollToSection('faq')} className="nav-list-item">FAQ</div>
                          </li>
                          <li>
                            <div onClick={() => handleScrollToSection('contact')} className="nav-list-item">Contact</div>
                          </li>
                          <li>
                            <CustomButton btnName={"Let's Talk"} btnSize={"small"} btnColor={"transparent-primary"} animatColor="primary"  withArrow={true} />
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
        </nav>
        </>
    )
}

export default HeaderNavigation;