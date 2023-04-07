import { useForm } from "../../hooks/useForm";
import { useRecipeContext } from "../../contexts/RecipeContext";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import styles from "./RecipeCreate.module.css";

export const RecipeCreate = () => {
    const { onCreateRecipeSubmit } = useRecipeContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        description: '',
        ingredients: '',
        instructions: '',
        imageUrl: ''
    }, onCreateRecipeSubmit);

    return (
        <section id="create-recipe">
            <Card className={styles.card}>
                <Form id="create" method="POST" onSubmit={onSubmit} className={styles.form}>
                    <div className="container">
                        <h1>Create Recipe</h1>

                        <Form.Group className="mb-3">
                            <Form.Label><h3>Title</h3></Form.Label>
                            <Form.Control
                                type="title"
                                id="title"
                                name="title"
                                placeholder="Your recipe title"
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
                                placeholder="Category"
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
                                placeholder="Your description goes here."
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
                                placeholder="Your ingredients"
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
                                placeholder="Your image url"
                                value={values.imageUrl}
                                onChange={changeHandler}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Create recipe
                        </Button>
                    </div>
                </Form>
            </Card>
        </section>
    );
};