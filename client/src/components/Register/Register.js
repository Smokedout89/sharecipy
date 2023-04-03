import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import styles from "./Register.module.css";

export const Register = () => {
    return (
        <section className={styles.main}>
            <Card className={styles.card}>
                <br>
                </br>
                <h2 className={styles.text}>Sign up</h2>
                <Form className={styles.form}>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Username</h3></Form.Label>
                        <Form.Control type="username" placeholder="Your username" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Email address</h3></Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Password</h3></Form.Label>
                        <Form.Control type="password" placeholder="Your password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><h3>Confirm Password</h3></Form.Label>
                        <Form.Control type="confirmpassword" placeholder="Repeat your password" />
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