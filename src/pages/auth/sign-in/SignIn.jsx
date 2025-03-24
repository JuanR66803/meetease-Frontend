import { NavLink } from "react-router";
import "./SignIn.css";

const SignIn = () => {
    return (
        <div className="sign-in">
            <h2>Inicia Sesion</h2>
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button className="buttom" type="submit">Iniciar sesión</button>
            </form>
            <p>¿No tienes una cuenta? <NavLink className="Sign-upEnlace" to={"/auth/sign-up"}>Registrate</NavLink></p>
        </div>
    );
};
export default SignIn;
