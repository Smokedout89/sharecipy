import { useRecipeContext } from "../../contexts/RecipeContext";

import { RecipeItem } from "./RecipeItem";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from "./Recipes.module.css";

export const Recipes = () => {
    const { recipes } = useRecipeContext();

    return (
        <section id="recipes-page">
            <h1>All Recipes</h1>

            <Row xs={1} md={3} className="g-4">
                {recipes.map(x =>
                    <Col>
                        <RecipeItem key={x._id} {...x} />
                    </Col>
                )}
            </Row>

            {recipes.length === 0 && (
                <h3 className="no-articles">No recipes yet.</h3>
            )}

        </section>
    );
};