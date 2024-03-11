import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isLoggedIn ? (
            <NavBar username={localStorage.getItem('username')} setIsLoggedIn={setIsLoggedIn}/>
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn}/>
          )
        } />
      </Routes>
      <Navigate to="/" />
    </Router>
  );
}

export default App;