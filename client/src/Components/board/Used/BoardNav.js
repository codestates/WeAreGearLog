/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const BoardNav = ({ authRegi, afterSearch, onMyList, isLogin }) => {
  const history = useHistory();
  const [goBoard, setGoBoard] = useState(true);

  const loginTrue = () => {
    if (isLogin === false) {
      alert('로그인을 해주세요');
      history.push('/used/store');
    } else {
      setGoBoard(false);
      onMyList();
    }
  };

  const isloginTrues = () => {
    if (isLogin === false) {
      alert('로그인을 해주세요');
      history.push('/board');
    } else {
      history.push('/used/write');
      setGoBoard(false);
    }
  };
  return (
    <div className="b-n">
      <div className="b-c">{authRegi.username}</div>
      <div onClick={isloginTrues} className="b-c-1">
        제품판매
      </div>
      <div onClick={loginTrue} className="b-c-1">
        {goBoard && afterSearch ? (
          '나의 판매목록'
        ) : (
          <div
            onClick={() => {
              history.push('/used/store');
              setGoBoard(true);
              location.reload();
            }}
          >
            중고게시판
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardNav;
