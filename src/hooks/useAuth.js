import { useState } from "react";

export const useAuth = () => {
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token");
    });
    const setAuth = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    };
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return [token, setAuth, logout];
}