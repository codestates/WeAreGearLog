import React from 'react';
import Button from '../Components/common/Button';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="Auth">
      <div className="AuthPage-1">
        <form className="register-2 ">
          <h1>회원가입</h1>
          <input className="email" placeholder="email"></input>
          <input className="password" placeholder="비밀번호"></input>
          <input className="password" placeholder="비밀번호 확인"></input>
          <input className="password" placeholder="유저네임"></input>
          <button className="loginButton">회원가입</button>
          <Link to="/account/login">
            <div className="type-selector-3">sign in here</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
