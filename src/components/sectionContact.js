
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
    
            <form method="post" className="contact-form" id="contactUs-Form">
                    
                <input type="text" name="name" className="box" id="name" placeholder="Nombre" required />
                <input type="email" name="email" className="box" id="email" placeholder="Email" required />
                <input type="text" name="subject" className="box" id="subject" placeholder="Asunto" required />
                <textarea cols="30" rows="10" name="comment" id="comment" className="box" placeholder="Mensaje"></textarea>
                <button type="submit" className="btn" name="submit" id="submit">Enviar</button>
                
                <span className="alert" id="msg"></span>
                
            </form>
            
        </div>

    </section>
    );
}

export default SectionContact;