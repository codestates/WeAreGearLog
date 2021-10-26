import { useState, useEffect } from 'react';

import './App.css';
import SignIn from './Auth/SignIn';
import axios from 'axios';
import HomePage from './Pages/HomePage';

import Footer from './Components/Footer';
import { useHistory, Route, Switch } from 'react-router-dom';
import Register from './Auth/Register';
import Board from './Pages/Board';
import Mypage from './Pages/Mypage';
import PassChange from './Pages/PassChange';
import Logi from './Pages/Brands/Logi';
import FindPass from './Pages/FindPass';
import ReturnHome from './Pages/ReturnHome';

const App = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [authRegi, setAuthRegi] = useState({
    email: '',
    username: '',
    password: '',
    passwordCornfirm: '',
  });

  console.log(authRegi.password);
  const authorization = () => {
    let token = localStorage.getItem('token');
    axios
      .get('http://52.79.233.29:8080/user', {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        let totoken = res.config.headers.authorization.split(' ')[1];
        if (token === totoken) {
          // console.log(res.data.data.userinfo.username);
          setAuthRegi({
            email: res.data.data.userinfo.email,
            username: res.data.data.userinfo.username,
          });
          setIsLogin(true);
        }
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

  const getKakaoToken = (code) => {
    axios
      .post('http://52.79.233.29:8080/callback/kakao', {
        authorizationCode: code,
      })
      .then((res) => {
        // console.log(res.data.data.properties);
        if (res.data.data) {
          setAuthRegi({
            email: res.data.data.properties.email,
            username: res.data.data.properties.nickname,
          });
          setIsLogin(true);
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGoogleToken = (code) => {
    axios
      .post('http://localhost:8080/callback/google', {
        authorizationCode: code,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          setAuthRegi({
            email: res.data.data.email,
            username: res.data.data.id,
          });
          setIsLogin(true);
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    let social = localStorage.getItem('social');
    if (authorizationCode) {
      if (social === 'kakao') {
        getKakaoToken(authorizationCode);
      }
      if (social === 'google') {
        getGoogleToken(authorizationCode);
      }
    } else {
      if (!social) {
        authorization();
      } else {
        if (!authRegi.username) {
          getLocalInfo();
          return;
        }
        localStorage.setItem('name', authRegi.username);
        localStorage.setItem('mail', authRegi.email);
        // getLocalInfo();
      }
    }
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
          <Mypage
            authRegi={authRegi}
            isLogin={isLogin}
            setAuthRegi={setAuthRegi}
            setIsLogin={setIsLogin}
            authorization={authorization}
          />
        </Route>
        <Route path="/b/board">
          <Board />
        </Route>
        <Route path="/account/pwc">
          <PassChange
            authorization={authorization}
            authRegi={authRegi}
            setIsLogin={setIsLogin}
          />
        </Route>

        <Route path="/brands/list/logitech" component={Logi} />

        <Route path="/find/reset-password/send-email" component={FindPass} />
        <Route path="/find/reset-password/rtlogin" component={ReturnHome} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
