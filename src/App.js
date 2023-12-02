import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Unavailable from './components/Unavailable';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import MainPage from './components/MainPage';
import Registration from './components/Registration';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/home' element={<MainPage />}>

          </Route>
          <Route path='/registration' element={<Registration />} />
          <Route path='/unavailable' element={<Unavailable />} />
        </Routes>
      </Router>

    </div>
  )
}
