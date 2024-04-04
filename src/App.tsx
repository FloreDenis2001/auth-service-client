import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginProvider from './components/context/LoginProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/user/components/Login';
import Register from './components/user/components/Register';
import Home from './components/pages/Home';

function App() {
  return (
    <LoginProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  </LoginProvider>
  );
}

export default App;
