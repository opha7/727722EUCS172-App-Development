import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import LoginSuccess from './components/LoginSuccess';
import RegisterSuccess from './components/RegisterSuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login-success" element={<LoginSuccess />} />
            <Route path="/register-success" element={<RegisterSuccess />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
