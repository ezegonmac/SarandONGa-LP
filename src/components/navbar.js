
const Navbar = () => {
    
    return (
        <header class="header">

            <a class="logo" href="#home">
                <h2>SARANDONGA</h2> 
            </a>

            <nav class="navbar">
                <a href="#home">inicio</a>
                <a href="#about">nosotros</a>
                <a href="#team">equipo</a>
                <a href="#destrezas">destrezas</a>
                <a href="#contact">contacto</a>
            </nav>

            <div class="fas fa-bars" id="menu-btn"></div>
            
        </header>
    );
}

export default Navbar;