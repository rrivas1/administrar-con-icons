import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="*">
                  Compositores
                </NavLink>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Canciones
                </a>
                <ul className="dropdown-menu show" data-bs-popper="static">
                  <li>
                    <NavLink className="dropdown-item" to="/cancre">
                      Registrar canciones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/canlis">
                      Listar canciones
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/canadmin">
                      Administrar canciones
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="Acer">
                  Acerca de
                </NavLink>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    </>
  );
};
