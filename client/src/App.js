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

function App() {

    return (
        <AuthProvider>
            <RecipeProvider>

                <div id="box">
                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='register' element={<Register />} />
                            <Route path='recipes' element={<Recipes />} />
                            <Route path='recipes/:recipeId' element={<RecipeDetails />} />
                            <Route path='create' element={<RecipeCreate />} />
                            <Route path='login' element={<Login />} />
                            <Route path='logout' element={<Logout />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>

            </RecipeProvider>
        </AuthProvider>
    );
}

export default App;