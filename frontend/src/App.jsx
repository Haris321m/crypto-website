import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Nansen from './components/components-1/1.Nansen2/Nansen2.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Forward from './components/forward/Forward.jsx';
import Alpha from './components/components-1/2.Alpha/Alpha.jsx'
import Portfolio from './components/components-1/3.Portfolio/Portfolio.jsx'
import Query from './components/components-1/5.Query/Query.jsx';
import Solutions from './components/components-2/Solutions.jsx';
import Learning from './components/components-3/Learning.jsx';
import Blog from './components/components-3/2.Blog/Blog.jsx';
import './App.css';

const App = () => {
  return (
      <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nansen" element={<Nansen />} />
            <Route path='/Alpha' element={<Alpha />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/Query' element={<Query />} />
            <Route path='/Solutions' element={<Solutions />} />
            <Route path='/Learning' element={<Learning />} />
            <Route path='/Blog' element={<Blog />} />
            
          </Routes>
          <Reviews />
          <Forward />
          <Footer />
      </Router>
  );
}

export default App;
