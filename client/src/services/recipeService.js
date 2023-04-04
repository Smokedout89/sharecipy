import { requestFactory } from "./requester";

const url = 'http://localhost:3030/data/recipes';

export const recipeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getOne = async (recipeId) => {
        const result = await request.get(`${url}/${recipeId}`);

        return result;
    }

    const getAll = async () => {
        const result = await request.get(url);
        const recipes = Object.values(result);

        return recipes;
    }

    const create = async (recipeData) => {
        const result = await request.post(url, recipeData);

        return result;
    }

    const edit = (recipeId, data) => request.put(`${url}/${recipeId}`, data);

    const deleteRecipe = (recipeId) => request.delete(`${url}/${recipeId}`);

    return {
        getOne,
        getAll,
        create,
        edit,
        delete: deleteRecipe
    }
}