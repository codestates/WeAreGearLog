import { useState } from 'react';

// import Nav from './Components/Nav';
import './App.css';
import SingIn from './Auth/SignIn';
import newNav from './Components/Nevbar';
// import Home from './Components/Home';
import HomePage from './Pages/HomePage';

import Footer from './Components/Footer';
import { Route, Switch } from 'react-router';
import Register from './Auth/Register';
import NavBar from './Components/Nevbar';
const App = () => {
  return (
    <>
      <HomePage />

      <Switch>
        <Route path="/account/login">
          <SingIn />
        </Route>
        <Route path="/account/register">
          <Register />
        </Route>
        <Footer />
      </Switch>
    </>
  );
};

export default App;
