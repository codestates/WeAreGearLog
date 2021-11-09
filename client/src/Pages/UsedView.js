/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import UsedCommnetWrite from '../Components/board/Used/UsedCommnetWrite';
import UsedDU from '../Components/board/Used/UsedDU';
import UsedLike from '../Components/board/Used/UsedLike';
import './UsedView.css';
import displayedAt from '../AuthModule/TimeModule';
import { useSelector } from 'react-redux';
import axios from 'axios';

const UsedView = ({
  setSaveUsedWrite,
  saveUsedWrite,
  PostusedComment,
  // readData,
  commentWrite,
  onCommentChange,
}) => {
  let token = localStorage.getItem('token');
  const readData = useSelector((state) => [state.board.used]);
  const dataId = readData.map((el) => el.id);

  // useEffect(() => {
  //   console.log('123123', data);
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/post/${dataId[0]}`, {
  //       headers: { authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {
  //       setSaveUsedWrite(res.data.comment);
  //     });
  // }, []);

  const viewData = readData.map((el) => {
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
