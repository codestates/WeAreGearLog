import React from 'react';
import { Link } from 'react-router-dom';
const ReturnHome = () => {
  return (
    <div className="my">
      <div className="mypage">
        <h1>완료</h1>
        <span className="type-selector-2">
          임시비밀번호를 메일로 보내드렸습니다
          <br />
          임시비밀번호로 다시 로그인해주시고, 신규 패스워드로 변경하세요.
        </span>
        <hr></hr>

        <Link to="/account/login">
          <p className="type-selector-2">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default ReturnHome;
