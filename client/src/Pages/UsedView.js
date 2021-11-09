/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import UsedCommnetWrite from '../Components/board/Used/UsedCommnetWrite';
import UsedDU from '../Components/board/Used/UsedDU';
import UsedLike from '../Components/board/Used/UsedLike';
import './UsedView.css';
import displayedAt from '../AuthModule/TimeModule';
import axios from 'axios';
import { useSelector } from 'react-redux';
const UsedView = ({
  setSaveUsedWrite,
  saveUsedWrite,
  PostusedComment,

  commentWrite,
  onCommentChange,
}) => {
  let token = localStorage.getItem('token');
  const data = useSelector((state) => [state.board.used]);
  const dataId = data.map((el) => el.id);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/post/${dataId[0]}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSaveUsedWrite(res.data.comment);
      });
  }, []);

  const viewData = data.map((el) => {
    const timeStamp = displayedAt(new Date(el.createdAt));
    return (
      <div key={el.id} className="used-read">
        <div className="used-title">{el.title}</div>
        <div className="used-info">
          <span className="used-info-list">{el.username}</span>

          <span className="used-info-list">{timeStamp}</span>

          <span className="used-info-list">{el.view}</span>

          <span className="used-info-list">{el.like} </span>
        </div>
        <div
          className="used-main-view"
          dangerouslySetInnerHTML={{
            __html: el.content,
          }}
        ></div>
        <UsedLike />
        <UsedDU />
        <UsedCommnetWrite
          el={el}
          saveUsedWrite={saveUsedWrite}
          PostusedComment={PostusedComment}
          commentWrite={commentWrite}
          onCommentChange={onCommentChange}
        />
      </div>
    );
  });

  return (
    <div className="UsedBoard">
      <div className="used-view">{viewData}</div>
    </div>
  );
};

export default UsedView;
