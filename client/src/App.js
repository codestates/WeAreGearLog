import React from 'react';

import Nav from './Components/Nav';
import './App.css';
import SingIn from './Auth/SignIn';

import Home from './Components/Home';

import Brand from './Components/Brand';

import BrandCover from './Components/BrandCover';
import Intro from './Components/Intro';
import IntroCover from './Components/IntroCover';
import Sponsor from './Components/Sponsor';
import Footer from './Components/Footer';
import { Route } from 'react-router';
import Register from './Auth/Register';

const App = () => {
  return (
    <div>
      <Nav />
      <Route exact path="/">
        <Home />
        <IntroCover />
        <Intro />
        <BrandCover />
        <Brand />
        <Sponsor />
        <Footer />
      </Route>
      <Route path="/account/login">
        <SingIn />
      </Route>
      <Route path="/account/register">
        <Register />
      </Route>
    </div>
  );
};

export default App;
