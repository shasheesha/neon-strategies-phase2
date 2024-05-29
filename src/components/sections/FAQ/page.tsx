import LinkWithArrow from '@/components/button/LinkWithArrow/LinkWithArrow';
import './style.scss';
import CustomButton from '@/components/button/CustomButton/CustomButton';

const About: React.FC = () => {

    return(
        <>
        <section className="faq">
            <div className="container">
                <div className="content-wrap">
                    <div className="sub-title">FAQ</div>
                    <div className='sub-content'>
                        <p className='headline'>Find Your Answers Here</p>
                        <p className='description'>Our services at Neon Strategies are tailored to meet the unique needs of your business, ensuring that your brand not only stands out but also connects deeply with your audience.</p>
                        
                    </div>
                    </div>
            </div>
        </section>
        </>
    )
}
export default About;