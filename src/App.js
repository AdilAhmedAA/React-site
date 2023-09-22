import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ScrollToTop from "./components/scrollToTop";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/pages/AboutUs';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/Portfolio' element={<Portfolio/>} />
          <Route path='/Blog' element={<Blog/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
