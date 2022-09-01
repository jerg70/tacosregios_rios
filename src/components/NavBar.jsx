import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
<header className="row">
{/* 
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

              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menu</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Tacos de Harina</a>
                    <a className="dropdown-item" href="#">Tacos de Maíz</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Bebidas</a>
                  </div>
              </li>   

              <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            </ul>
          </div>
          <CartWidget />

        </div>
      </nav> */}

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
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menú
          </a>
          <ul className="dropdown-menu bg-dark text-white">
            <li className="hoverSubMenu"><a className="dropdown-item text-white" href="#">Tacos de Maíz</a></li>
            <li className="hoverSubMenu"><a className="dropdown-item text-white" href="#">Tacos de Harina</a></li>
            <li className="hoverSubMenu"><hr className="dropdown-divider"/></li>
            <li className="hoverSubMenu"><a className="dropdown-item text-white" href="#">Bebidas</a></li>
          </ul>
        </li>
      </ul>
      <CartWidget />
    </div>

  </div>
</nav>
    </header>
    )
}

export default NavBar;