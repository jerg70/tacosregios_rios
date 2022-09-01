import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
<header className="row">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-lg-12 col-md-12 col-sm-12">
        <div className="container-fluid">
          <a href="../../public/index.html">
            <img src="../../media/taqueria_Logo.png" alt="Tacos Regios Logo" className="navbar-brand logoTacos"/>
        </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="../../public/index.html">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            </ul>
          </div>
          <CartWidget />

        </div>
      </nav>
      
    </header>
    )
}

export default NavBar;