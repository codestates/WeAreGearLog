import { useState, useEffect } from 'react';
import AfterSearch from './Components/board/AfterSearch';
import './App.css';
import SignIn from './Auth/SignIn';
import axios from 'axios';
import HomePage from './Pages/HomePage';
import { LOGI } from './ReviewData';
import Footer from './Components/Footer';
import { useHistory, Route, Switch } from 'react-router-dom';
import Register from './Auth/Register';
import Dk from './Pages/Team/Dk';
import Mypage from './Pages/Mypage';
import PassChange from './Pages/PassChange';
import Logi from './Pages/Brands/Logi';
import FindPass from './Pages/FindPass';
import ReturnHome from './Pages/ReturnHome';
import ReviewTemp from './Pages/Brands/Review/ReviewTemp';
import Board from './Pages/Board';
import T1 from './Pages/Team/T1';
import Drx from './Pages/Team/Drx';
import Geng from './Pages/Team/Geng';
import Han from './Pages/Team/Han';
import Brand from './Components/Brand';
import Used from './Pages/Used';
import ChatHome from '../src/Pages/chat/ChatHome';
import ChatRoom from './Pages/chat/ChatRoom';

const App = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const history = useHistory();
  const [saveId, setSaveId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [authRegi, setAuthRegi] = useState({
    email: '',
    username: '',
    profileImg: '',
    password: '',
    passwordCornfirm: '',
  });

  const handleCardClick = (id) => {
    setSaveId(id);
  };

  const authorization = () => {
    let token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        let totoken = res.config.headers.authorization.split(' ')[1];
        if (token === totoken) {
          setAuthRegi({
            email: res.data.data.userinfo.email,
            username: res.data.data.userinfo.username,
            profileImg: res.data.data.userinfo.profile_img,
          });
          setIsLogin(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getKakaoToken = (code) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/callback/kakao`, {
        authorizationCode: code,
      })
      .then((res) => {
        if (res.data.data) {
          let token = res.data.token;
          localStorage.setItem('token', token);
          setIsLogin(true);
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGoogleData = (token) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/callback/google`, {
        accessToken: token,
      })
      .then((res) => {
        if (res.data.data) {
          let token = res.data.token;
          localStorage.setItem('token', token);
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
    const hash = url.hash;
    let googleAcessToken;
    if (hash) {
      googleAcessToken = hash.split('=')[1].split('&')[0];
    }
    let social = localStorage.getItem('social');
    if (authorizationCode || googleAcessToken) {
      if (social === 'kakao') {
        getKakaoToken(authorizationCode);
      }
      if (social === 'google') {
        getGoogleData(googleAcessToken);
      }
    } else {
      authorization();
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

        <Route path="/account/pwc">
          <PassChange
            authorization={authorization}
            authRegi={authRegi}
            setIsLogin={setIsLogin}
          />
        </Route>

        <Route path="/brands/list">
          <Logi
            setSaveId={setSaveId}
            handleCardClick={handleCardClick}
            dummy={LOGI}
          />
        </Route>
        <Route path="/used">
          <Used
            chatOpen={chatOpen}
            setChatOpen={setChatOpen}
            isLogin={isLogin}
            authRegi={authRegi}
          />
        </Route>

        <Route path="/find/reset-password/send-email" component={FindPass} />
        <Route path="/find/reset-password/rtlogin" component={ReturnHome} />
        <Route path="/brands/review/logitech">
          <ReviewTemp setSaveId={setSaveId} saveId={saveId} LOGI={LOGI} />
        </Route>
        <Route path="/board">
          <div className="Board">
            <Board isLogin={isLogin} authRegi={authRegi} />
          </div>
        </Route>
        <Route path="/team/t1">
          <T1 />
          <Brand />
        </Route>
        <Route path="/team/drx">
          <Drx />
          <Brand />
        </Route>
        <Route path="/team/geng">
          <Geng />
          <Brand />
        </Route>
        <Route path="/team/dwk">
          <Dk />
          <Brand />
        </Route>
        <Route path="/team/han">
          <Han />
          <Brand />
        </Route>
      </Switch>
      {chatOpen ? (
        <Route path="/used/store/:roomId" component={ChatRoom}></Route>
      ) : null}

      <Footer />
    </>
  );
};

export default App;
