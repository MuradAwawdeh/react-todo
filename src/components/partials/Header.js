import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
    const {loggedIn} = useContext(UserContext);
    const {logout} = useAuth();
    return (
        <nav>
            <div>
                <span><Link to="/">Murad</Link></span> Todo App
            </div>
            <ul>
                <li><Link to="/about">About</Link></li>
                |
                {!loggedIn && <li><Link to="/login">Login</Link></li>}
                {loggedIn && <li><Link to="/login" onClick={logout}>Logout</Link></li>}
            </ul>
        </nav>
    );
}