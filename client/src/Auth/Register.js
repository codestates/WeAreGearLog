import React from 'react';
import AuthForm from './AuthForm';
import '../App.css';

import AuthTemplate from './AuthTemplate';

const Register = ({ isLogin, setIsLogin, authRegi, setAuthRegi }) => {
  return (
    <AuthTemplate>
      <AuthForm
        authRegi={authRegi}
        setAuthRegi={setAuthRegi}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        type="register"
      />
    </AuthTemplate>
  );
};

export default Register;
