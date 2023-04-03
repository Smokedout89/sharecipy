import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styles from "./Login.module.css";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, onLoginSubmit);

    return (
        <section id='login-page' className="login">
            <Card className={styles.card}>
                <br>
                </br>
                <Form id="login" method="POST" onSubmit={onSubmit} className={styles.form}>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Email</h3></Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="Your email"
                            name={LoginFormKeys.Email}
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Password</h3></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Your password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                    <h5 className={styles.text}>If you don't have profile click <Link to="/register">here</Link></h5>
                </Form>
            </Card>
        </section>
    );
};