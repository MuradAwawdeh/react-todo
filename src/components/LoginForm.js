import styles from "./../styles/Login.module.scss";
import Button from "../components/styled-components/Button";
import Input from "../components/styled-components/Input";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassowrd] = useState("");
    const [token, setToken] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            let data = await res.json();
            if(data.token){
                setToken(data.token);
                navigate("/");
            }
        }catch(e){}
    };
    
    useEffect(() => {
        if(token) {
            navigate("/");
        }
    });
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <label>Username</label><br/>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Password</label><br/>
                    <Input value={password} onChange={(e) => setPassowrd(e.target.value)} type="password" />
                </div>
                <Button className={styles.submit} type="submit">Login</Button>
            </form>
        </div>
    );
}