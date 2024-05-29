import LinkWithArrow from '@/components/button/LinkWithArrow/LinkWithArrow';
import './style.scss';
import ImageCardCarousel from '@/components/ImageCardCarousel/page';


const DigitalMarketing = [
    '/images/digital-marketing/dm-1.png',
    '/images/digital-marketing/dm-2.png',
    '/images/digital-marketing/dm-1.png',
    '/images/digital-marketing/dm-2.png',
  ];
  const Branding = [
    '/images/branding/b-1.png',
    '/images/branding/b-2.png',
    '/images/branding/b-1.png',
    '/images/branding/b-2.png',
  ];
  const CreativeServices = [
    '/images/creative-services/cs-1.png',
    '/images/creative-services/cs-2.png',
    '/images/creative-services/cs-1.png',
    '/images/creative-services/cs-2.png',
  ];

const WhatWeDo: React.FC = () => {

    return(
        <>
        <section className="what-we-do">
            <div className="container">
                <div className="content-wrap">                    
                    <div className="sub-title">WHAT WE DO</div>
                    <div className='sub-content'>
                        <p className='headline'>Our process at Neon Strategies is designed to be thorough, flexible, and client-focused</p>
                    </div>
                </div>
                <div className="service-container">
                    <div className='service-wrap'>
                        <div className="service-content">
                            <div className="service-content-wrap">
                                <p className="service-title">Digital Marketing</p>
                                <p className="service-description">At Neon Strategies, we harness the power of digital marketing to elevate your brand and connect you with your target audience. Our comprehensive digital marketing services are designed to drive traffic, increase engagement, and boost conversions.</p>
                                <div className="tag-content">
                                    <span className="tag">SEO</span>
                                    <span className="tag">Social Media Marketing</span>
                                    <span className="tag">Content Marketing</span>
                                </div>
                            </div>
                            <LinkWithArrow label={'Learn More'} />
                        </div>
                        <div className="service-carousel">
                            <ImageCardCarousel images={DigitalMarketing} />
                        </div>
                        </div>

                        <div className='service-wrap'>
                        <div className="service-content">
                            <div className="service-content-wrap">
                                <p className="service-title">Branding</p>
                                <p className="service-description">At Neon Strategies, we understand that a strong brand is the foundation of any successful business. Our branding services are designed to create a memorable and impactful brand identity that resonates with your target audience and sets you apart from the competition.</p>
                                <div className="tag-content">
                                    <span className="tag">Brand Strategy</span>
                                    <span className="tag">Logo Design</span>
                                    <span className="tag">Brand Identity</span>
                                </div>
                            </div>
                            <LinkWithArrow label={'Learn More'} />
                        </div>
                        <div className="service-carousel">
                            <ImageCardCarousel images={Branding} />
                        </div>
                        </div>

                        <div className='service-wrap'>
                        <div className="service-content">
                            <div className="service-content-wrap">
                                <p className="service-title">Creative Services</p>
                                <p className="service-description">At Neon Strategies, our Creative Services team is dedicated to bringing your vision to life with innovative and captivating designs. We believe that creativity is at the heart of effective marketing, and we strive to create visual content that not only captures attention but also drives engagement and results.</p>
                                <div className="tag-content">
                                    <span className="tag">Graphic Design</span>
                                    <span className="tag">Photography</span>
                                </div>
                            </div>
                            <LinkWithArrow label={'Learn More'} />
                        </div>
                        <div className="service-carousel">
                            <ImageCardCarousel images={CreativeServices} />
                        </div>
                    </div>


                </div>
            </div>
        </section>
        </>
    )
}

export default WhatWeDo;