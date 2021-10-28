<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import SingIn from './Auth/SignIn';
import HomePage from './Pages/HomePage';
=======
import { useState, useEffect } from 'react';
import './App.css';
import SignIn from './Auth/SignIn';
import axios from 'axios';
import HomePage from './Pages/HomePage';
import { LOGI } from './ReviewData';
>>>>>>> 12fef710a456262318352cfba7a29e56fb813ef4
import Footer from './Components/Footer';
import { useHistory, Route, Switch } from 'react-router-dom';
import Register from './Auth/Register';
import Mypage from './Pages/Mypage';
import PassChange from './Pages/PassChange';
import Logi from './Pages/Brands/Logi';
import FindPass from './Pages/FindPass';
import ReturnHome from './Pages/ReturnHome';
import ReviewTemp from './Pages/Brands/Review/ReviewTemp';
import Lazer from './Pages/Brands/Lazer';
import PostPage from './Pages/Write/PostPage';
import PostListPage from './Pages/Write/PostListPage';
import ArticlePage from './Pages/Write/ArticlePage';
import RegisterPage from './Pages/Write/RegisterPage';
import Roccat from './Pages/Brands/Roccat';
import Csr from './Pages/Brands/Csr';


const App = () => {
  const history = useHistory();
  const [saveId, setSaveId] = useState(0);

  const [isLogin, setIsLogin] = useState(false);
  // console.log(saveId);

  const [authRegi, setAuthRegi] = useState({
    email: '',
    username: '',
    profileImg: '',
    password: '',
    passwordCornfirm: '',
  });
  const handleCardClick = (id) => {
    console.log(id);
    setSaveId(id);
  };

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
    // authorization();
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
        console.log(res.data.data.properties);
        if (res.data.data) {
          setAuthRegi({
            email: res.data.data.properties.email,
            username: res.data.data.properties.nickname,
            profileImg: res.data.data.properties.profile_image,
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
      .post('http://52.79.233.29:8080/callback/google', {
        authorizationCode: code,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data) {
          setAuthRegi({
            email: res.data.data.email,
            username: res.data.data.email.slice(
              0,
              res.data.data.email.indexOf('@'),
            ),
            profileImg: res.data.data.picture,
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
        getLocalInfo();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return (
    <>
<<<<<<< HEAD
      <HomePage />
      <Switch>
        <Route path="/account/login">
          <SingIn />
=======

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
          <PostPage />
>>>>>>> 12fef710a456262318352cfba7a29e56fb813ef4
        </Route>
        <Route path="/b/postlistpage">
          <PostListPage />
        </Route>
        <Route path="/b/article/:articleId">
          <ArticlePage />
        </Route>
        <Route path="/b/registerpage">
          <RegisterPage />
        </Route>
        <Route path="/account/pwc">
          <PassChange
            authorization={authorization}
            authRegi={authRegi}
            setIsLogin={setIsLogin}
          />
        </Route>


        <Route path="/brands/list/logitech" component={Logi} />
        <Route path="/brands/list/razer" component={Lazer} />
        <Route path="/brands/list/roccat">
          <Roccat />
        </Route>
        <Route path="/brands/list/logitech">
          <Logi
            setSaveId={setSaveId}
            handleCardClick={handleCardClick}
            dummy={LOGI}
          />
        </Route>
        <Route path="/brands/list/razer">
          <Lazer />
        </Route>
        <Route path="/find/reset-password/send-email" component={FindPass} />
        <Route path="/find/reset-password/rtlogin" component={ReturnHome} />
        <Route path="/brands/review/logitech">
          <ReviewTemp setSaveId={setSaveId} saveId={saveId} LOGI={LOGI} />
        </Route>
        <Route path="/brands/list/corsair">
          <Csr />
        </Route>
<<<<<<< HEAD
        <Route path="/board">
          <Board />
          </Route>
        <Footer />
=======
>>>>>>> 12fef710a456262318352cfba7a29e56fb813ef4
      </Switch>

      <Footer />
    </>
  );
};

export default App;
