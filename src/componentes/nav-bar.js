import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Hojas-de-estilo/NavBar.css";

function NavBar({ openModal, goToLogin, user, onLogout }) {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Adogtame
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // evita el salto al inicio
                    if (user) {
                      openModal(); // si está logueado, abre el modal
                    } else {
                      alert(
                        "Debes iniciar sesión para poner un perro en adopción."
                      );
                    }
                  }}
                >
                  Poner en adopción
                </a>
              </li>
              <li className="nav-item">
                {user ? (
                  <button
                    className="nav-link btn btn-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onLogout(); // llama a la función de cierre de sesión
                    }}
                  >
                    Cerrar sesión
                  </button>
                ) : (
                  <button
                    className="nav-link btn btn-link"
                    onClick={(e) => {
                      e.preventDefault();
                      goToLogin(); // abre el formulario de login si no está logueado
                    }}
                  >
                    Iniciar sesión
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
