import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
