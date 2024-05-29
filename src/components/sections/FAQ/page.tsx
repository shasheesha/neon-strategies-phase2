import Accordion from '@/components/Accordion/page';
import './style.scss';

const FAQItems = [
    {
      title: 'What services does Neon Strategies offer?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'How does Neon Strategies approach a new project?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'Can you help improve our existing marketing strategies?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'What industries does Neon Strategies specialize in?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
    {
      title: 'How long does it take to see results from a marketing campaign?',
      content: 'We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).',
    },
  ];

const Faq: React.FC = () => {

    return(
        <>
        <section className="faq" id='faq'>
            <div className="container">
                <div className="content-wrap">
                    <div className="sub-title">FAQ</div>
                    <div className='sub-content'>
                        <p className='headline'>Find Your Answers Here</p>
                        <p className='description'>Our services at Neon Strategies are tailored to meet the unique needs of your business, ensuring that your brand not only stands out but also connects deeply with your audience.</p>
                    </div>
                </div>
                <div className="faq-accodion-wrap">
                    <div className="gray-line"></div>
                    <Accordion items={FAQItems} />
                </div>
            </div>
        </section>
        </>
    )
}
export default Faq;