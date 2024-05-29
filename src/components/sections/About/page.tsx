import LinkWithArrow from '@/components/button/LinkWithArrow/LinkWithArrow';
import './style.scss';
import CustomButton from '@/components/button/CustomButton/CustomButton';

const About: React.FC = () => {

    return(
        <>
        <section className="about">
            <div className="container">
                <div className="content-wrap">
                    <div className="sub-title">ABOUT US</div>
                    <div className='sub-content'>
                        <p className='headline'>Our Mission</p>
                        <p className='description'>To light up your brand with cutting-edge marketing strategies that drive growth and enhance brand visibility.</p>
                        <p className='description'>Neon Strategies is a full-service marketing agency dedicated to energizing your brand through creative and effective marketing solutions. Founded in 2017, we have been at the forefront of marketing innovation, helping businesses of all sizes achieve their goals.</p>
                        <div className="link-button">
                            <CustomButton btnSize={'normal'} btnName={'Contact Us Today'} btnColor={'primary'} withArrow={true} animatColor={'white'}/>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
        </>
    )
}
export default About;