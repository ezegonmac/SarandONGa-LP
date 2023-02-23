

const SectionAbout = () => {

    return (
        <section className="about" id="about">

            <div className="heading">
                <h2>Sobre <span>Nosotros</span></h2>
            </div>

            <div className="box-container">
        
                <div className="content">

                    <h2>¿A qué nos dedicamos?</h2>
<p>Nos especializamos en desarrollar soluciones digitales que ayudan a las <span>ONG</span> a gestionar de manera eficiente sus recursos y a alcanzar sus objetivos. </p>
<p>En particular, estamos trabajando en una <span>solución software innovadora</span> que permitirá a las organizaciones gestionar sus voluntarios y sus turnos, controlar su stock, gestionar las subvenciones, monitorizar a los beneficiarios y gestionar a sus trabajadores. </p>
<p>Nuestra solución proporcionará a las ONG una plataforma integral que les permitirá ahorrar tiempo y recursos valiosos, simplificando su gestión y permitiéndoles centrarse en su misión principal: <span>hacer una diferencia positiva en el mundo.</span></p>
    
                    <div className="about-info">

                        <div className="counting">
                                        
                            <div className="box">
                                <h1 className="count" data-count="15" data-type="exact">15</h1>
                                <h3>integrantes</h3>
                            </div>

                            <div className="box">
                                <h1 className="count" data-count="5">4+</h1>
                                <h3>años de experiencia</h3>
                            </div>
                            
                            <div className="box">
                                <h1 className="count" data-count="151">150+</h1>
                                <h3>proyectos completados</h3>
                            </div>
                        
                        </div>

                    </div>
                    
                </div>

                <div className="image">
                    <img src="/images/logo-xl.png" alt="About-Image" />
                </div>
                
            </div>

        </section>
    );
}

export default SectionAbout;