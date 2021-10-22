/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import kakaoB from '../Img/kakao.png';
import { Link } from 'react-router-dom';
import googleB from '../Img/google.png';
import '../App.css';
const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];

  return (
    <div className="Auth">
      <div className="AuthPage-1">
        <form onSubmit={onSubmit} className="register-2">
          <h1>{text}</h1>

          <input
            value={form.email}
            onChange={onChange}
            name="email"
            className="email"
            placeholder="이메일"
          ></input>
          <input
            onChange={onChange}
            value={form.password}
            name="password"
            type="password"
            className="password"
            placeholder="비밀번호"
          ></input>

          {type === 'register' && (
            <>
              <input
                type="password"
                value={form.passwordConfirm}
                onChange={onChange}
                name="passwordConfirm"
                className="password"
                placeholder="비밀번호 확인"
              ></input>
              <input
                name="username"
                value={form.username}
                onChange={onChange}
                className="password"
                placeholder="유저네임"
              ></input>
            </>
          )}
          <button className="loginButton">{text}</button>
        </form>
        {type === 'login' ? (
          <div>
            <div className="type-selector">
              <div className="type-selector-1">Forgot your password?</div>
              <li className="type-selector-slash">/</li>
              <Link to="/account/register">
                <div className="type-selector-2">Create account</div>
              </Link>
            </div>
            <div>
              <div className="socialB">
                <div className="socialtag">소셜 로그인</div>

                <img className="socialBt" src={kakaoB} alt=""></img>

                <img className="socialBt" src={googleB} alt=""></img>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to="/account/login">
              <div className="type-selector-3">sign in here</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;

{
  /* <div>
<div className="type-selector">
  <div className="type-selector-1">Forgot your password?</div>
  <li className="type-selector-slash">/</li>
  <Link to="/account/register">
    <div className="type-selector-2">Create account</div>
  </Link>
</div>
<div>
  <div className="socialB">
    <div className="socialtag">소셜 로그인</div>

    <img className="socialBt" src={kakaoB} alt=""></img>

    <img className="socialBt" src={googleB} alt=""></img>
  </div>
</div>
</div> */
}
