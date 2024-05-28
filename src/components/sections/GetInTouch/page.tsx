import React from "react";
import "./style.scss";
import Link from "next/link";

const GetInTouch: React.FC = () =>{


    return(
        <>
        <section className="get-in-touch">
            <div className="container">
                <div className="content-wrap">
                        <div className="section-label">Get In Touch</div>
                        <p className="heading">We’d love to hear from you! Whether you’re ready to start your project or just have a question, feel free to reach out.</p>
                        <Link href="mailto:info@neostrategies.com" className="email-address">info@neostrategies.com</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default GetInTouch;