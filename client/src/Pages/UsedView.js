/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import UsedCommnetWrite from '../Components/board/Used/UsedCommnetWrite';
import UsedDU from '../Components/board/Used/UsedDU';
import UsedLike from '../Components/board/Used/UsedLike';
import './UsedView.css';
import displayedAt from '../AuthModule/TimeModule';
const UsedView = ({
  saveUsedWrite,
  PostusedComment,
  readData,
  commentWrite,
  onCommentChange,
}) => {
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
