import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("user")) || null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Error al leer usuario de localStorage", error);
        }
    }, []);

    const login = (userData) => {
        try {
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error("Error al guardar usuario en localStorage", error);
        }
    };

    const logout = () => {
        try {
            localStorage.removeItem("user");
            setUser(null);
        } catch (error) {
            console.error("Error al eliminar usuario de localStorage", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// ✅ Exporta el hook useAuth
export const useAuth = () => useContext(AuthContext);
