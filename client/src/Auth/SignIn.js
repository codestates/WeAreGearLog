/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

import AuthTemplate from './AuthTemplate';

import LoginForm from '../containers/auth/LoginForm';

const SignIn = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default SignIn;
// <div className="Auth">
//   <div className="AuthPage-1">
//     <form onSubmit={onSubmit} className="register-2">
//       <h1>Login</h1>

//       <input
//         value={form.username}
//         onChange={onChange}
//         name="email"
//         className="email"
//         placeholder="이메일"
//         value={form.eamil}
//       ></input>
//       <input
//         name="password"
//         type="password"
//         className="password"
//         placeholder="비밀번호"
//         value={form.password}
//       ></input>
//       <button className="loginButton">로그인</button>

//       <div className="type-selector">
//         <div className="type-selector-1">Forgot your password?</div>
//         <li className="type-selector-slash">/</li>
//         <Link to="/account/register">
//           <div className="type-selector-2">Create account</div>
//         </Link>
//       </div>

//       <div className="socialB">
//         <div className="socialtag">소셜 로그인</div>

//         <img className="socialBt" src={kakaoB} alt=""></img>

//         <img className="socialBt" src={googleB} alt=""></img>
//       </div>
//     </form>
//   </div>
// </div>
