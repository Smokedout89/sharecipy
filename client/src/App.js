import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { About } from './components/About';

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import { Recipe } from './components/Recipe';
import { AuthProvider } from './contexts/AuthContext';

function App() {

    return (
        <AuthProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='register' element={<Register />} />
                        <Route path='recipes' element={<Recipe />} />
                        <Route path='login' element={<Login />} />
                        <Route path='logout' element={<Logout />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;