import { useState } from 'react';
import './App.css';
import SingIn from './Auth/SignIn';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router';
import Register from './Auth/Register';
import Board from './Pages/Board';
import PostEditor from './Components/write/PostEditor';

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
        <Route path="/board/writepage">
          <PostEditor />
        </Route>
        <Footer />
      </Switch>
    </>
  );
};

export default App;
