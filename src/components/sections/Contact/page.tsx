import Image from "next/image";

const Contact: React.FC = () => {

    return(
        <>
        <section className="contact" id="contact">
            <div className="container">
                <div className="content-wrap">
                    <div className="form-wrap">
                        <form action="contact">

                        </form>
                    </div>
                    <div className="side-banner-wrap">
                        <Image
                          src={'/images/contact.png'}
                          alt="contact banner"
                          className="contact-banner aspect-[3/4] object-cover object-center rounded w-96"
                          width={540}
                          height={540}
                          placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;