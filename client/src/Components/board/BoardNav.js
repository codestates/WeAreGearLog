import React from 'react';
import { Link } from 'react-router-dom';
import './BoardMain.css';
const BoardNav = ({ authRegi, write, setWrite }) => {
  return (
    <div className="b-n">
      <div className="b-c">레벨:3</div>
      <div className="b-c">{authRegi.username}</div>
      <Link to="/board/write">
        <div className="b-c-1">글 쓰기</div>
      </Link>
      <div className="b-c-1">나의 글보기</div>
    </div>
  );
};

export default BoardNav;
