import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Country from './pages/DetailsPage';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/country/:name" element={<Country />} />
    </Routes>
  </Router>
);

export default App;
