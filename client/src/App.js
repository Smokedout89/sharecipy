import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { RecipeProvider } from './contexts/RecipeContext';

import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Recipes } from './components/Recipes';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { Footer } from "./components/Footer";
import { RecipeCreate } from './components/RecipeCreate';
import { RecipeDetails } from './components/RecipeDetails/RecipeDetails';
import { RouteGuard } from "./components/common/RouteGuard";
import { RecipeOwner } from "./components/common/RecipeOwner";
import { EditRecipe } from './components/RecipeEdit/RecipeEdit';

function App() {

    return (
        <AuthProvider>
            <RecipeProvider>

                <div id="box">
                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<Register />} />
                            <Route path='recipes' element={<Recipes />} />
                            <Route path='recipes/:recipeId' element={<RecipeDetails />} />

                            <Route element={<RouteGuard />}>
                                <Route path='/recipes/:recipeId/edit' element={
                                    <RecipeOwner>
                                        <EditRecipe />
                                    </RecipeOwner>
                                } />
                                <Route path='create' element={<RecipeCreate />} />
                                <Route path='logout' element={<Logout />} />
                            </Route>
                        </Routes>
                    </main>

                    <Footer />
                </div>

            </RecipeProvider>
        </AuthProvider>
    );
}

export default App;