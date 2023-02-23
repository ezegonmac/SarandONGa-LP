
const Navbar = () => {
    
    return (
        <header className="header">

            <a className="logo" href="#home">
                <h2>SARANDONGA</h2> 
            </a>

            <nav className="navbar">
                <a href="#home">Inicio</a>
                <a href="#about">Nosotros</a>
                <a href="#team">Equipo</a>
                <a href="#destrezas">Destrezas</a>
                <a href="#contact">Contacto</a>
            </nav>

            <div className="fas fa-bars" id="menu-btn"></div>
            
        </header>
    );
}

export default Navbar;