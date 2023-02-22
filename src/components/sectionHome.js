

const SectionHome = () => {

    return (
        <section class="home" id="home">

            <div class="box-container">

                <div class="content">
                    <div class="text">
                        <h2>Hola!</h2>
                        <h1>Somos un equipo de <br/> <span class="typing-text"></span></h1>
                        <p>comprometidos en crear soluciones digitales que faciliten la labor de las ONG. Nos apasiona utilizar la tecnología para hacer una diferencia en el mundo y estamos comprometidos en crear soluciones innovadoras que las ayuden a alcanzar sus objetivos.</p>
                        <a href="#about" class="btn">Conócenos <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
        
                <div class="image animated pulse">
                    <img src="/images/laptop-mockup.png" alt="Home-Image" />
                </div>

            </div>

        </section>
    );
}

export default SectionHome;