import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "./Register.module.css";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }, onRegisterSubmit);

    return (
        <section className={styles.main}>
            <Card className={styles.card}>
                <br>
                </br>
                <h2 className={styles.text}>Sign up</h2>
                <Form method="POST" onSubmit={onSubmit} className={styles.form}>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Username</h3></Form.Label>
                        <Form.Control
                            type="username"
                            id="username"
                            name="username"
                            placeholder="Your username"
                            value={values.username}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Email address</h3></Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={values.email}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Password</h3></Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Confirm Password</h3></Form.Label>
                        <Form.Control
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Repeat your password"
                            value={values.confirmPassword}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br>
                    </br>
                    <br>
                    </br>
                    <h5>If you are already registered click <Link to="/login">here</Link></h5>
                    <br>
                    </br>
                </Form>
            </Card>
        </section>
    );
};