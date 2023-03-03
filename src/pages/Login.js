import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <div style={style}>
            <LoginForm />
        </div>
    );
}

const style = {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
};