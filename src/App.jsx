import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./partials/NavBar.jsx";
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import FitnessGoalsPage from './pages/FitnessGoalsPage.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  if (!isLoggedIn) {
    document.body.style.background = 'url(/image1.jpg)';
  } else {
    document.body.style.background = 'rgb(30,30,30)';
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isLoggedIn ? (
            <>
              <NavBar username={localStorage.getItem('username')} setIsLoggedIn={setIsLoggedIn}/>
              <FitnessGoalsPage username={localStorage.getItem('username')} />
            </>
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