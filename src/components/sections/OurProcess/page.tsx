import Image from 'next/image';
import './style.scss';
import LinkWithArrow from '@/components/button/LinkWithArrow/LinkWithArrow';
import CustomButton from '@/components/button/CustomButton/CustomButton';
import AnimatedSection from '@/components/Animation/AnimationFadeUp/page';


const OurProcess: React.FC = () => {

    return(
        <>
        <section className="our-process" id='our-process'>
            <div className="container">
                <div className="content-wrap">                    
                    <div className="sub-title">OUR PROCESS AT NEON STRATEGIES</div>
                    <div className='sub-content'>
                        <p className='headline'>A comprehensive range of marketing services designed to elevate your brand and drive success.</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className='noncard-wrap'>
                        <p className='noncard-title'>We ensures your marketing remains effective and relevant.</p>
                        <p className="noncard-description">At Neon Strategies, we believe that a well-defined process is key to delivering exceptional results. Our approach is collaborative, transparent, and tailored to meet the unique needs of each client. Here’s a step-by-step overview of how we work:</p>
                    </div>
                    <div className='card-wrap'>
                        <div className="card">
                            <div className="card-content">
                                <div className="card-icon">
                                    <Image priority src={'/icons/op-1.png'} width={72} height={72} alt=''/>
                                </div>
                                <p className="card-title">Research & Analysis</p>
                                <p className="card-description">Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.</p>                       
                            </div>
                            <LinkWithArrow label={'Read More'} />
                        </div>
                    </div>
                    <div className='card-wrap'>
                        <div className="card">
                            <div className="card-content">
                                <div className="card-icon">
                                    <Image priority src={'/icons/op-1.png'} width={72} height={72} alt=''/>
                                </div>
                                <p className="card-title">Creative Concepting</p>
                                <p className="card-description">Our creative team brainstorms and develops innovative concepts that align with your brand and strategy. We focus on creating compelling visuals and messages that resonate with your audience and differentiate your brand from the competition.</p>                       
                            </div>
                            <LinkWithArrow label={'Read More'} />
                        </div>
                    </div>
                    <div className='card-wrap'>
                        <div className="card">
                            <div className="card-content">
                                <div className="card-icon">
                                    <Image priority src={'/icons/op-1.png'} width={72} height={72} alt=''/>
                                </div>
                                <p className="card-title">Implementation</p>
                                <p className="card-description">With a solid strategy and creative concepts in place, we move to the implementation phase. Our team executes the marketing plan across various channels, ensuring each element is aligned and working towards your goals. This includes launching campaigns, creating content, and optimizing your digital presence.</p>
                            </div>
                            <LinkWithArrow label={'Read More'} />
                        </div>
                    </div>
                    <div className='card-wrap'>
                        <div className="card">
                            <div className="card-content">
                                <div className="card-icon">
                                    <Image priority src={'/icons/op-1.png'} width={72} height={72} alt=''/>
                                </div>
                                <p className="card-title">Monitoring & Optimization</p>
                                <p className="card-description">We continuously monitor the performance of our campaigns and strategies using advanced analytics tools. By tracking KPIs and other metrics, we gain insights into what’s working and what can be improved. We make data-driven adjustments to optimize performance and maximize ROI.</p>
                            </div>
                            <LinkWithArrow label={'Read More'} />
                        </div>
                    </div>
                    <div className='card-wrap'>
                        <div className="button-card">
                            <CustomButton btnSize={'normal'} btnName={'Contact Us to Get Started'} btnColor={'transparent-gray'} withArrow={true} animatColor='gray'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default OurProcess;