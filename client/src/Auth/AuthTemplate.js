import React from 'react';

const AuthTemplate = ({ children }) => {
  return (
    <div className="Auth">
      <div className="AuthPage-1">{children}</div>
    </div>
  );
};

export default AuthTemplate;
