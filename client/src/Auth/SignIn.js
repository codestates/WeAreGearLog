/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

import AuthTemplate from './AuthTemplate';
import AuthForm from './AuthForm';

const SignIn = ({ isLogin, setIsLogin, authRegi, setAuthRegi }) => {
  return (
    <AuthTemplate>
      <AuthForm
        authRegi={authRegi}
        setAuthRegi={setAuthRegi}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        type="login"
      />
    </AuthTemplate>
  );
};

export default SignIn;
