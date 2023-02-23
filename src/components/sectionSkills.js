
const SectionSkills = () => {

    return(
        <section className="skill" id="destrezas">

            <div className="heading">
                <h2><span>Destrezas</span></h2>
            </div>

            <div className="box-container">

                <div className="skill-item">
                    <i className="fas fa-code"></i>
                    <h3>Desarrollo web</h3>
                    <p>Nuestro punto fuerte. Amplia experiencia desarrollando proyectos web con variedad de tecnologías.</p>
                </div>

                <div className="skill-item">
                    <i className="fas fa-paint-brush"></i>
                    <h3>Diseño</h3>
                    <p>Experiencia en la creación de identidad visual, diseño gráfico y diseño de productos.</p>
                </div>

                <div className="skill-item">
                    <i className="fas fa-bullhorn"></i>
                    <h3>Comunicación</h3>
                    <p>Excelente capacidad para comunicar ideas de manera clara y concisa. Experiencia en la redacción de contenido atractivo y efectivo.</p>
                </div>

                <div className="skill-item">
                    <i className="fas fa-users"></i>
                    <h3>Marketing digital</h3>
                    <p>Conocimiento de las últimas tendencias. Capacidad para diseñar y ejecutar estrategias efectivas de marketing en línea para impulsar la visibilidad y el alcance de los proyectos.</p>
                </div>

                <div className="skill-item">
                    <i className="fas fa-mobile"></i>
                    <h3>UI/UX</h3>
                    <p>Enfoque centrado en el usuario y habilidad para crear experiencias digitales atractivas e intuitivas. Experiencia en el diseño de interfaces de usuario, prototipado y pruebas de usabilidad.</p>
                </div>

                <div className="skill-item">
                    <i className="fas fa-camera"></i>
                    <h3>Fotografía y edición</h3>
                    <p>Dominio de técnicas de fotografía y edición, así como de herramientas de diseño gráfico. Capacidad para producir contenido visual impactante y de alta calidad.</p>
                </div>

            </div>

        </section>
    );
}

export default SectionSkills;