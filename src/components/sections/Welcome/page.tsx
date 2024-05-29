import LinkWithArrow from '@/components/button/LinkWithArrow/LinkWithArrow';
import './style.scss';

const Welcome: React.FC = () => {

    return(
        <>
        <section className="welcome">
            <div className="container">
                <div className="content-wrap">
                    <div className="title">Ignite Your Brand’s Potential with Neon Strategies</div>
                    <div className="content-bottom">
                    <div className="sub-title">WELCOME TO NEON STRATEGIES</div>
                    <div className='sub-content'>
                        <p className='description'>At Neon Strategies, we illuminate your brand with innovative and dynamic marketing solutions. Our team of experts is committed to transforming your vision into reality with strategies that deliver measurable results and sustainable growth.</p>
                        <div className="link-button">
                            <LinkWithArrow label={'Start Your Journey with Us!'} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Welcome;