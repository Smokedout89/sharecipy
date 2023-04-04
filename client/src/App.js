import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { RecipeProvider } from './contexts/RecipeContext';

import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Recipes } from './components/Recipes';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { About } from './components/About';
import { Footer } from "./components/Footer";

function App() {

    return (
        <AuthProvider>
            <RecipeProvider>

                <div id="box">
                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='about' element={<About />} />
                            <Route path='register' element={<Register />} />
                            <Route path='recipes' element={<Recipes />} />
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