

const SectionHome = () => {

    return (
        <section className="home" id="home">

            <div className="box-container">

                <div className="content">
                    <div className="text">
                        <h2>Hola!</h2>
                        <h1>Somos un equipo de <br/> <span className="typing-text"></span></h1>
                        <p>comprometidos en crear soluciones digitales que faciliten la labor de las ONG. Nos apasiona utilizar la tecnología para hacer una diferencia en el mundo y estamos comprometidos en crear soluciones innovadoras que las ayuden a alcanzar sus objetivos.</p>
                        <a href="#about" className="btn">Conócenos <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
        
                <div className="image animated pulse">
                    <img src="/images/laptop-mockup.png" alt="Home-Image" />
                </div>

            </div>

        </section>
    );
}

export default SectionHome;