import { useState, useEffect } from 'react';

import './App.css';
import SignIn from './Auth/SignIn';
import axios from 'axios';
import HomePage from './Pages/HomePage';

import Footer from './Components/Footer';
import { Route, Switch } from 'react-router';
import Register from './Auth/Register';
import Board from './Pages/Board';
import Mypage from './Pages/Mypage';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [authRegi, setAuthRegi] = useState({
    email: '',
    username: '',
    password: '',
    passwordCornfirm: '',
  });
  const authorization = () => {
    let token = localStorage.getItem('token');
    axios
      .get('http://52.79.233.29:8080/user', {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log('123123', res);
        let totoken = res.config.headers.authorization.split(' ')[1];
        if (token === totoken) {
          // console.log(res.data.data.userinfo.username);
          setAuthRegi({
            email: res.data.data.userinfo.email,
            username: res.data.data.userinfo.username,
          });
          setIsLogin(true);
        }
        console.log('1231321', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLocalInfo = () => {
    authorization();
    let name = localStorage.getItem('username');
    let mail = localStorage.getItem('email');
    if (name) {
      setAuthRegi({
        email: mail,
        username: name,
      });
      setIsLogin(true);
    }
  };

  const url = new URL(window.location.href); //전역으로
  useEffect(() => {
    localStorage.setItem('name', authRegi.username);
    localStorage.setItem('mail', authRegi.email);
    getLocalInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return (
    <>
      <div className="homepage">
        <HomePage
          isLogin={isLogin}
          authRegi={authRegi}
          setIsLogin={setIsLogin}
          setAuthRegi={setAuthRegi}
        />
      </div>

      <Switch>
        <Route path="/account/login">
          <SignIn
            authRegi={authRegi}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setAuthRegi={setAuthRegi}
          />
        </Route>

        <Route path="/account/register">
          <Register
            authRegi={authRegi}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setAuthRegi={setAuthRegi}
          />
        </Route>
        <Route path="/account/mypage">
          <Mypage />
        </Route>
        <Route path="/b/board">
          <Board />
        </Route>
        <Footer />
      </Switch>
    </>
  );
};

export default App;
