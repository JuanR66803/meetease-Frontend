import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            return setError("Todos los campos son obligatorios.");
        }

        if (formData.password !== formData.confirmPassword) {
            return setError("Las contraseñas no coinciden.");
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setSuccess("Usuario registrado con éxito. Redirigiendo...");
            setTimeout(() => navigate("/auth/sign-in"), 2000);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="sign-up">
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
                <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" onChange={handleChange} />
                <button className="button-up" type="submit">Registrarse</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    );
};
console.log("🔗 VITE_API_URL:", import.meta.env.VITE_API_URL);


export default SignUp;
