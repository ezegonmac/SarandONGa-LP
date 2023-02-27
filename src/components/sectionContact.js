import ContactForm from '@/components/ContactForm.js';

const SectionContact = () => {

    return (
        <section className="contact" id="contact">

        <div className="heading">
            <h2><span>Contáctanos</span></h2>
        </div>

        <div className="box-container">

            <div className="contact-info">

                <h3>Get in touch</h3>

                <p>Estaremos encantados de responderte.</p>
    
                {/* <div className="info-item">
                    <h4>Phone:</h4>
                    <div className="detail">
                        <div className="fas fa-phone"></div>
                        <p>+123-456-789</p>
                    </div>
                    <div className="detail">
                        <div className="fas fa-phone"></div>
                        <p>+111-222-333</p>
                    </div>
                </div> */}
    
                <div className="info-item">
                    <h4>Email:</h4>
                    <div className="detail">
                        <div className="fas fa-envelope"></div>
                        <p className="gmail"> <a href="mailto:isppgrupo12@gmail.com" target="_blank">isppgrupo12@gmail.com</a> </p>
                    </div>
                </div>

                {/* <div className="info-item">
                    <h4>linkedin:</h4>
                    <div className="detail">
                        <div className="fab fa-linkedin"></div>
                        <p className="linkedin">https://www.linkedin.com/</p>
                    </div>
                </div> */}

                <div className="info-item">
                    <h4>Github:</h4>
                    <div className="detail">
                        <div className="fab fa-github"></div>
                        <p className="github"> <a href="https://github.com/ISPP-12" target="_blank">https://github.com/ISPP-12 </a></p>
                    </div>
                </div>
            </div>
    
            <ContactForm/>
            
        </div>

    </section>
    );
}

export default SectionContact;