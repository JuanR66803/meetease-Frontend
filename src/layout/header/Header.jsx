import "./Header.css";
import { NavLink } from "react-router"; // Usa 'react-router-dom' en lugar de 'react-router'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <h1 className="logo">Logo</h1>
                <NavLink to="/" end>
                    Inicio
                </NavLink>
                <NavLink to="/eventos" end>
                    Eventos
                </NavLink>
                <div className="box-buttom">
                    <NavLink className="sign-inButton" to="/auth/sign-in" end>
                        Iniciar sesión
                    </NavLink>
                    <NavLink className="sign-upButton" to="/auth/sign-up" end>
                        Registrarse
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
