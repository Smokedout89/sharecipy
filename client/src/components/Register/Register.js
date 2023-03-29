import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Register = () => {
    return (
        // <Form>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="Enter email" />
        //         <Form.Text className="text-muted">
        //             We'll never share your email with anyone else.
        //         </Form.Text>
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control type="password" placeholder="Password" />
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //         <Form.Check type="checkbox" label="Check me out" />
        //     </Form.Group>
        //     <Button variant="primary" type="submit">
        //         Submit
        //     </Button>
        // </Form>

        <form>
            <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Enter your name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Enter your password"
                />
            </div>
            <div className="form-group">
                <label htmlFor="inputConfirmPassword">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="inputConfirmPassword"
                    placeholder="Confirm your password"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Register
            </button>
        </form>
    );
};