import { useState } from 'react';
import './App.css';
import SingIn from './Auth/SignIn';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router';
import Register from './Auth/Register';
import Board from './Pages/Board';

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
        <Route path="/board">
          <Board />
        </Route>
        <Footer />
      </Switch>
    </>
  );
};

export default App;
