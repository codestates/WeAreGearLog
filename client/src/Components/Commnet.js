import React from 'react';
import './Commnet.css';
const Commnet = ({ deleteC, el }) => {
  return (
    <div className="b-c-list1">
      <div className="c-ui"></div>
      <div className="c-title">
        <div className="c-t">{el.content}</div>
        <div className="c-time">
          <div className="c-2">{el.username}</div>
          <div className="c-2">{el.createdAt}</div>
          <div onClick={() => deleteC(el.id)} className="c-2">
            삭제
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commnet;
