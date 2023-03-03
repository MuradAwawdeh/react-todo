import { useState, useContext } from "react";
import { UserContext } from "../App";

export const useAuth = () => {
    const {setLoggedIn} = useContext(UserContext);
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token");
    });
    const setAuth = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
        setLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setLoggedIn(false);
    };

    return {token, setToken: setAuth, logout};
}