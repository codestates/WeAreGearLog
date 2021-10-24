import { useState } from 'react';
import './App.css';
import SignIn from './Auth/SignIn';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router';
import Register from './Auth/Register';
import Board from './Pages/Board';

const App = () => {
  return (
    <>

      <div className="homepage">
        <HomePage />
      </div>

      <Switch>
        <Route path="/account/login">
          <SignIn />
        </Route>
        <Route path="/b/board">
          <Board />
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
