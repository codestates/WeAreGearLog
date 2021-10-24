import React from 'react';
import { Link } from 'react-router-dom';
const InfoMd = ({ postLogout }) => {
  return (
    <div className="userinfo">
      <Link to="/account/mypage">
        <li className="userinfo-mypage">MYpage</li>
      </Link>
      <li onClick={() => postLogout()} className="userinfo-mypage">
        Logout
      </li>
    </div>
  );
};

export default InfoMd;
