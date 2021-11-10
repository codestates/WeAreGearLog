import React from 'react';
import { Link } from 'react-router-dom';
const BoardNav = ({ authRegi }) => {
  return (
    <div className="b-n">
      <div className="b-c">{authRegi.username}</div>
      <Link to="/used/write">
        <div className="b-c-1">물품 올리기</div>
      </Link>
      <Link>
        <div className="b-c-1">나의 게시물</div>
      </Link>
    </div>
  );
};

export default BoardNav;
