import styles from "./../styles/Login.module.scss";
import Button from "../components/styled-components/Button";

export default function LoginForm() {
    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>
            <Button>Login with google</Button>
        </div>
    );
}