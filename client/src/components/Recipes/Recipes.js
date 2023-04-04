import { useRecipeContext } from "../../contexts/RecipeContext";

import { RecipeItem } from "./RecipeItem";

export const Recipes = () => {
    const { recipes } = useRecipeContext();

    return (
        <section id="recipes-page">
            <h1>All Recipes</h1>

            {recipes.map(x =>
                <RecipeItem key={x._id} {...x} />
            )}

            {recipes.length === 0 && (
                <h3 className="no-articles">No recipes yet.</h3>
            )}

        </section>
    );
};