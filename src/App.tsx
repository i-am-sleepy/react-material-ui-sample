import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductPage from './components/pages/ProductPage';
import HomePage from './components/pages/HomePage';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Dashboard from './components/pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/products' Component={ProductPage} />
        <Route path='/products' Component={ProductPage} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/signin' Component={SignIn} />
        <Route path='/dashboard' Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
