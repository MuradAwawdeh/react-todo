import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <div>
                <span><Link to="/">Murad</Link></span> Todo App
            </div>
            <ul>
                <li><Link to="/about">About</Link></li>
                |
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}