import "./Header.css";
import { NavLink } from "react-router"; // Usa 'react-router-dom' en lugar de 'react-router'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img src="/Logo.png" className="logo" alt="logo" />
                <NavLink className="enlace" to="/" end>
                    Inicio
                </NavLink>
                <NavLink className="enlace" to="/eventos" end>
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
