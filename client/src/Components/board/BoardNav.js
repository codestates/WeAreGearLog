/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './BoardMain.css';

const BoardNav = ({ onMyList, afterSearch, authRegi, isLogin }) => {
  const history = useHistory();
  const [goBoard, setGoBoard] = useState(true);

  const loginTrue = () => {
    if (isLogin === false) {
      alert('로그인을 해주세요');
      history.push('/board');
    } else {
      setGoBoard(false);
      onMyList();
    }
  };

  const isloginTrue = () => {
    if (isLogin === false) {
      alert('로그인을 해주세요');
      history.push('/board');
    } else {
      history.push('/board/write');
      setGoBoard(false);
    }
  };
  return (
    <div className="b-n">
      <div className="b-c">{authRegi.username}</div>
      <div onClick={isloginTrue} className="b-c-1">
        글 쓰기
      </div>
      <div onClick={loginTrue} className="b-c-1">
        {goBoard && afterSearch ? (
          '나의글보기'
        ) : (
          <div
            onClick={() => {
              history.push('/board');
              setGoBoard(true);
              location.reload();
            }}
          >
            게시판으로
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardNav;
