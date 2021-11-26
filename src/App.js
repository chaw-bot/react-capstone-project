import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ContinentPage from './pages/ContinentPage';
import Country from './pages/DetailsPage';
import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/continent/:continent" element={<ContinentPage />} />
      <Route path="/country/:name" element={<Country />} />
    </Routes>
  </Router>
);

export default App;
