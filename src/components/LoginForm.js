import styles from "./../styles/Login.module.scss";
import Button from "../components/styled-components/Button";
import Input from "../components/styled-components/Input";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
      password: Yup.string()
      .required('Required')
});

export default function LoginForm() {
    const [error, setError] = useState("");
    const {token, setToken} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            navigate("/");
        }
    });
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        setError("");
                        let res = await fetch(`${process.env.REACT_APP_BASE_URL}login`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(values)
                        });
                        let data = await res.json();
                        if(data.token){
                            setToken(data.token);
                            navigate("/");
                        }else if(data.message) {
                            setError(data.message);
                        }
                        setSubmitting(false);
                    }catch(e){
                        setSubmitting(false);
                        setError("An error occured");
                    }
                }}
            >
                {(formik) => (
                    <form className={styles.form} onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="Username">Username</label><br/>
                            <Input name="username"
                                   placeholder={"use user 'demo'"}
                                   type="text"
                                   {...formik.getFieldProps('username')}
                                   hasError={formik.errors.username && formik.touched.username}/>
                            <ErrorMessage name="username" render={msg => (
                                <div className={styles.error}>{msg}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="Password">Password</label><br/>
                            <Input name="password"
                                   placeholder={"use password 'demo'"}
                                   type="password"
                                   {...formik.getFieldProps('password')}
                                   hasError={formik.errors.password && formik.touched.password}/>
                            <ErrorMessage name="password" render={msg => (
                                <div className={styles.error}>{msg}</div>
                            )}/>
                        </div>
                        <Button className={styles.submit} type="submit" disabled={formik.isSubmitting}>Login</Button>
                        {error && <div className={styles.alert}>{error}</div>}
                    </form>
                )}
            </Formik>
        </div>
    );
}