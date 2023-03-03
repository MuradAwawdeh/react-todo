import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
    const [token] = useAuth();
    return (
        <nav>
            <div>
                <span><Link to="/">Murad</Link></span> Todo App
            </div>
            <ul>
                <li><Link to="/about">About</Link></li>
                |
                {!token && <li><Link to="/login">Login</Link></li>}
                {token && <li><Link to="/login">Logout</Link></li>}
            </ul>
        </nav>
    );
}