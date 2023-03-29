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

function App() {

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='register' element={<Register />} />
                    <Route path='recipe' element={<Recipe />} />
                    <Route path='login' element={<Login />} />
                    <Route path='logout' element={<Logout />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;