import React, {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginProvider from './components/context/LoginProvider';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('./components/pages/Home'));
const Login = lazy(() => import('./components/user/components/Login'));
const Register = lazy(() => import('./components/user/components/Register'));
function App() {
    return (
        <LoginProvider>
            <div className="App">
                <BrowserRouter basename="/ui">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </div>
        </LoginProvider>
    );
}


export default App;
