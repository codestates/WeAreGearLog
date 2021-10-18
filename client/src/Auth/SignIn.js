import React from 'react';
import Button from '../Components/common/Button';
import kakaoB from '../Img/kakao.png';
import { Link } from 'react-router-dom';
import googleB from '../Img/google.png';
import styled from 'styled-components';
import Footer from '../Components/Footer';

const SignIn = () => {
  return (
    <div className="Auth">
      <div className="AuthPage-1">
        <form className="AuthPage-2">
          <h1>Login</h1>
          <input className="email" placeholder="이메일"></input>
          <input className="password" placeholder="비밀번호"></input>
          <button className="loginButton">로그인</button>

          <div className="type-selector">
            <div className="type-selector-1">Forgot your password?</div>
            <li className="type-selector-slash">/</li>
            <Link to="/account/register">
              <div className="type-selector-2">Create account</div>
            </Link>
          </div>

          <div className="socialB">
            <div className="socialtag">소셜 로그인</div>

            <img className="socialBt" src={kakaoB}></img>

            <img className="socialBt" src={googleB}></img>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
