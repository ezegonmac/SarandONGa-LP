
const SectionContact = () => {

    return (
        <section class="contact" id="contact">

        <div class="heading">
            <h2><span>Contáctanos</span></h2>
        </div>

        <div class="box-container">

            <div class="contact-info">

                <h3>Get in touch</h3>

                <p>Estaremos encantados de responderte.</p>
    
                {/* <div class="info-item">
                    <h4>Phone:</h4>
                    <div class="detail">
                        <div class="fas fa-phone"></div>
                        <p>+123-456-789</p>
                    </div>
                    <div class="detail">
                        <div class="fas fa-phone"></div>
                        <p>+111-222-333</p>
                    </div>
                </div> */}
    
                <div class="info-item">
                    <h4>Email:</h4>
                    <div class="detail">
                        <div class="fas fa-envelope"></div>
                        <p class="gmail"> <a href="mailto:isppgrupo12@gmail.com" target="_blank">isppgrupo12@gmail.com</a> </p>
                    </div>
                </div>

                {/* <div class="info-item">
                    <h4>linkedin:</h4>
                    <div class="detail">
                        <div class="fab fa-linkedin"></div>
                        <p class="linkedin">https://www.linkedin.com/</p>
                    </div>
                </div> */}

                <div class="info-item">
                    <h4>Github:</h4>
                    <div class="detail">
                        <div class="fab fa-github"></div>
                        <p class="github"> <a href="https://github.com/ISPP-12" target="_blank">https://github.com/ISPP-12 </a></p>
                    </div>
                </div>
            </div>
    
            <form method="post" class="contact-form" id="contactUs-Form">
                    
                <input type="text" name="name" class="box" id="name" placeholder="Nombre" required />
                <input type="email" name="email" class="box" id="email" placeholder="Email" required />
                <input type="text" name="subject" class="box" id="subject" placeholder="Asunto" required />
                <textarea cols="30" rows="10" name="comment" id="comment" class="box" placeholder="Mensaje"></textarea>
                <button type="submit" class="btn" name="submit" id="submit">Enviar</button>
                
                <span class="alert" id="msg"></span>
                
            </form>
            
        </div>

    </section>
    );
}

export default SectionContact;