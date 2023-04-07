import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./RecipeItem.module.css";

export const RecipeItem = ({
    _id,
    title,
    imageUrl,
    description
}) => {
    return (
        <Card className={styles.card}>
            <Card.Img height='280px' variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}
                </Card.Text>
            </Card.Body>
            <ButtonGroup size="lg" className={styles.buttonGroup}>
                <Link to={`/recipes/${_id}`}><Button variant="primary">Details</Button>{' '}</Link>
                &nbsp;
                &nbsp;
                &nbsp;
                <Link to="/login"><Button variant="warning">Edit</Button>{' '}</Link>
                &nbsp;
                &nbsp;
                &nbsp;
                <Link to="/login"><Button variant="danger">Delete</Button>{' '}</Link>
            </ButtonGroup>
            <Card.Footer className={styles.footer}>
                <small className="text-muted">Likes <FontAwesomeIcon icon={faHeart} /> </small>
            </Card.Footer>
        </Card>
    )
}