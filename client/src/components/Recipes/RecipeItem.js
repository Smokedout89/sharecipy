import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import styles from "./RecipeItem.module.css";

export const RecipeItem = ({
    _id,
    title,
    imageUrl,
    category
}) => {
    return (
        <>
            <Card className={styles.card}>
                <Card.Img height='280px' variant="top" src="https://drive.google.com/uc?id=1jTiYozo2WOacX-jb55jzg0D8aKJu2zhc" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <ButtonGroup size="lg" className={styles.buttonGroup}>
                    <Link to="/login"><Button variant="primary">Details</Button>{' '}</Link>
                    {/* <div className={styles.divider} /> */}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to="/login"><Button variant="warning">Info</Button>{' '}</Link>
                    {/* <div className={styles.divider} /> */}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to="/login"><Button variant="danger">Delete</Button>{' '}</Link>              
                </ButtonGroup>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </>
    )
}