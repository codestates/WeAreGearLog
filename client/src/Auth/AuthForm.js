/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from 'react';
import kakaoB from '../Img/kakao.png';
import { Link, Switch, useHistory } from 'react-router-dom';
import googleB from '../Img/google.png';
import '../App.css';
import styled from 'styled-components';
import { emailCheck, passwordCheck } from '../AuthModule/Verifi';
import axios from 'axios';
import Nevbar from '../Components/Nevbar';
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-bottom: 10px;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, setIsLogin, setAuthRegi, authRegi }) => {
  const text = textMap[type];
  const history = useHistory();

  const handleInputValue = (key) => (e) => {
    setAuthRegi({ ...authRegi, [key]: e.target.value });
  };

  //--------회원가입함수-----//
  const postSignUp = () => {
    return axios
      .post(
        'http://52.79.233.29:8080/user/signup',
        {
          email: authRegi.email,
          password: authRegi.password,
          username: authRegi.username,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((result) => {
        console.log(result);
        if (result.data.message === '이미 존재하는 email입니다') {
          alert('이미있는 email 입니다');
        } else if (result.data.message === '이미 존재하는 username입니다') {
          alert('이미있는 username 입니다');
        }
        if (result.data.message === 'signup ok') {
          alert('회원가입이완료되었습니다 로그인해주세요');
          history.push('/account/login');
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          alert('모든 정보는 필수 입력 사항입니다.');
        }
      });
  };
  //------------------------//
  //--------login함수-----//
  const postLogin = () => {
    return axios
      .post(
        'http://52.79.233.29:8080/user/login',
        { email: authRegi.email, password: authRegi.password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === 'ok') {
          //유저정보가 변한것이 마이페이지에 보여야된다
          let token = res.data.token;
          localStorage.setItem('token', token);
          setAuthRegi(authRegi.email);

          setAuthRegi(authRegi.username);

          setIsLogin(true);

          history.push('/');
        }
      })
      .catch((err) => {
        if (err) {
          alert('이메일과 패스워드를 확인해주세요!');
        }
      });
  };
  //------------------------//
  const onSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      postLogin();
    }

    if (type === 'register') {
      if (!emailCheck(authRegi.email)) {
        alert('적합한 이메일이 아닙니다');
        return false;
      }

      if (authRegi.password !== authRegi.passwordCornfirm) {
        alert('패스워드 그거 맞아?');
        return false;
      }
      if (!passwordCheck(authRegi.password)) {
        alert('패스워드는 특수문자,영문, 숫자 필수 포함 6~21자리');
        return false;
      }
      postSignUp();
    }
  };

  return (
    <div className="Auth">
      <div className="AuthPage-1">
        <form onSubmit={onSubmit} className="register-2">
          <h1>{text}</h1>

          <input
            value={authRegi.email}
            onChange={handleInputValue('email')}
            name="email"
            className="email"
            placeholder="이메일"
          ></input>
          <input
            value={authRegi.password}
            onChange={handleInputValue('password')}
            name="password"
            type="password"
            className="password"
            placeholder="비밀번호"
          ></input>

          {type === 'register' && (
            <>
              <input
                value={authRegi.passwordCornfirm}
                type="password"
                onChange={handleInputValue('passwordCornfirm')}
                name="passwordCornfirm"
                className="password"
                placeholder="비밀번호 확인"
              ></input>

              <input
                value={authRegi.username}
                name="username"
                onChange={handleInputValue('username')}
                className="password"
                placeholder="유저네임"
              ></input>

              <p
                className="type-3"
                onClick={() => history.push('/account/login')}
              >
                Login here
              </p>
            </>
          )}

          <button className="loginButton">{text}</button>
          <br></br>

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
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
