import React from 'react';
import { Link } from 'react-router-dom';

const Register = ({ form, onChange, onSubmit }) => {
  return (
    <div className="Auth">
      <div className="AuthPage-1">
        <form onSubmit={onSubmit} className="register-2 ">
          <h1>회원가입</h1>
          <input
            onChange={onChange}
            name="un"
            className="email"
            placeholder="이메일"
          ></input>
          <input
            onChange={onChange}
            name="password"
            className="password"
            placeholder="비밀번호"
          ></input>
          <input
            onChange={onChange}
            name="passwordConfirm"
            className="password"
            placeholder="비밀번호 확인"
          ></input>
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
