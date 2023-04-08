import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useService } from '../../hooks/useService';
import { recipeServiceFactory } from "../../services/recipeService";

import { useAuthContext } from '../../contexts/AuthContext';
import { useRecipeContext } from "../../contexts/RecipeContext";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import styles from "./RecipeDetails.module.css";

export const RecipeDetails = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState([]);
    const { userId, isAuthenticated } = useAuthContext();
    const { deleteRecipe } = useRecipeContext();
    const recipeService = useService(recipeServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then((recipe) => {
                setRecipe(recipe);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipeId]);

    const isOwner = recipe._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${recipe.title}`);

        if (result) {
            await recipeService.delete(recipe._id);

            deleteRecipe(recipe._id);

            navigate('/recipes');
        };
    };

    return (
        <section id="recipe-details">
            <h1 className={styles.mainText}>Recipe Details</h1>

            <div className={styles.card}>
                <div className="row g-0">
                    <div className="col-sm-5">
                        <Card.Img height='100%' width='100%' variant="right" src={recipe.imageUrl} />
                    </div>
                    <div className="col-sm-7">
                        <Card.Body className={styles.cardBody}>
                            <Card.Title className={styles.textTitle}><h1>{recipe.title}</h1></Card.Title>
                            <div className={styles.text}>                       
                                <h2>{recipe.category}</h2>
                                <h4>{recipe.description}</h4>
                            </div>
                            <div className={styles.text}>
                                <h3>{recipe.ingredients}</h3>
                                <h4>{recipe.instructions}</h4>
                            </div>
                        </Card.Body>

                        {isOwner && (
                            <div className="col-md-12 text-center">
                                <ButtonGroup size="lg" className={styles.buttonGroup}>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Link to={`/recipes/${recipe._id}/edit`}><Button className={styles.button} variant="warning">Edit</Button>{' '}</Link>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Link to="/recipes"><Button className={styles.button} onClick={onDeleteClick} variant="danger">Delete</Button>{' '}</Link>
                                </ButtonGroup>
                            </div>
                        )}                        
                    </div>
                </div>
            </div>
        </section>
    );
};