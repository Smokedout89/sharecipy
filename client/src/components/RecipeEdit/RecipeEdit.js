import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { useRecipeContext } from "../../contexts/RecipeContext";
import { recipeServiceFactory } from "../../services/recipeService";
import { useService } from "../../hooks/useService";
import { useForm } from "../../hooks/useForm";

import styles from "./RecipeEdit.module.css";

export const EditRecipe = () => {
    const { onEditRecipeSubmit } = useRecipeContext();
    const { recipeId } = useParams();
    const recipeService = useService(recipeServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        description: '',
        ingredients: '',
        instructions: '',
        imageUrl: ''
    }, onEditRecipeSubmit);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeValues(result);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipeId]);

    return (
        <section id="edit-recipe">
            <Card className={styles.card}>
                <Form id="edit" method="POST" onSubmit={onSubmit} className={styles.form}>
                    <div className="container">
                        <h1>Edit Recipe</h1>

                        <Form.Group className="mb-3">
                            <Form.Label><h3>Title</h3></Form.Label>
                            <Form.Control
                                type="title"
                                id="title"
                                name="title"
                                value={values.title}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><h3>Category</h3></Form.Label>
                            <Form.Control
                                type="category"
                                id="category"
                                name="category"
                                value={values.category}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><h3>Description</h3></Form.Label>
                            <Form.Control
                                type="description"
                                id="description"
                                name="description"
                                value={values.description}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><h3>Ingredients</h3></Form.Label>
                            <Form.Control
                                type="ingredients"
                                id="ingredients"
                                name="ingredients"
                                value={values.ingredients}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><h3>Instructions</h3></Form.Label>
                            <textarea rows="4" cols="40"
                                id="instructions"
                                name="instructions"
                                value={values.instructions}
                                onChange={changeHandler}>
                            </textarea>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label><h3>Image Url</h3></Form.Label>
                            <Form.Control
                                type="imageUrl"
                                id="imageUrl"
                                name="imageUrl"
                                value={values.imageUrl}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Edit recipe
                        </Button>
                    </div>
                </Form>
            </Card>
        </section>
    );
};