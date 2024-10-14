import './App.css';
import React from 'react';
import  Home from './Component/Home/Home'
import LoginForm from './Component/LoginForm/LoginForm';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (

  <>
  <Router>
    <Routes>
    <Route path='/' element={<LoginForm/>}/>  
    <Route path="/home" element={<Home/>} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
