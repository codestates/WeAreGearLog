import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './BoardMain.css';
const BoardNav = ({ authRegi, write, setWrite, isLogin }) => {
  const history = useHistory();
  const loginTrue = () => {
    if (isLogin === false) {
      alert('로그인을 해주세요');
      history.push('/board');
    }
  };

  return (
    <div className="b-n">
      <div className="b-c">{authRegi.username}</div>

      <div onClick={loginTrue} className="b-c-1">
        글 쓰기
      </div>

      <div onClick={loginTrue} className="b-c-1">
        나의 글보기
      </div>
    </div>
  );
};

export default BoardNav;
