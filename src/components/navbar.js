
const Navbar = () => {
    
    return (
        <header class="header">

            <a class="logo" href="#home">
                <h2>SARANDONGA</h2> 
            </a>

            <nav class="navbar">
                <a href="#home">Inicio</a>
                <a href="#about">Nosotros</a>
                <a href="#team">Equipo</a>
                <a href="#destrezas">Destrezas</a>
                <a href="#contact">Contacto</a>
            </nav>

            <div class="fas fa-bars" id="menu-btn"></div>
            
        </header>
    );
}

export default Navbar;