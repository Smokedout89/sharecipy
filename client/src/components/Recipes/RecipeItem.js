import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
                <Card.Title className={styles.titleText}>{title}</Card.Title>
                <Card.Text className={styles.recipeDescr}>{description}
                </Card.Text>
            </Card.Body>
            <ButtonGroup size="lg" className={styles.buttonGroup}>
                <Link to={`/recipes/${_id}`}><Button variant="primary">Details</Button>{' '}</Link>
            </ButtonGroup>
        </Card>
    )
}