import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../assests/styles/GlobalStyles';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MainTransactionsPage from '../pages/MainTransactionPage/MainTransactionPage';
import SharedLayout from './SharedLayout/SharedLayout';

const App = () => {

  return (
    <Router basename="/goit-react-project-01">  {/* Set basename */}
    <GlobalStyles />
    <SharedLayout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transactions" element={<MainTransactionsPage />} />
      </Routes>
    </SharedLayout>
  </Router>
  );
};

export default App;
