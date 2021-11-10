import React from 'react';
import '../../Commnet.css';
import displayedAt from '../../../AuthModule/TimeModule';
const UsedCommnet = ({ authRegi, deleteC, el }) => {
  const timeStamp = displayedAt(new Date(el.createdAt));
  console.log('나와라', el);
  return (
    <div className="b-c-list1">
      <div className="c-ui">
        <img src={el.profile_img} width="57" height="57" alt=""></img>
      </div>
      <div className="c-title">
        <div className="c-t">{el.content}</div>
        <div className="c-time">
          <div className="c-2">{el.username}</div>
          <div className="c-2">{timeStamp}</div>
          {authRegi.username !== el.username ? null : (
            <div onClick={() => deleteC(el.id)} className="c-2">
              삭제
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsedCommnet;
