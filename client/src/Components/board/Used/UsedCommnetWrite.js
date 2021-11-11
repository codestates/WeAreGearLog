import React from 'react';
import UsedCommnet from './UsedComment';

const UsedCommnetWrite = ({
  authRegi,
  deleteC,
  saveUsedWrite,
  PostusedComment,
  commentWrite,
  onCommentChange,
  el,
}) => {
  console.log('UsedCommnet', authRegi);
  return (
    <div className="c-top">
      <h3 className="c-top-in">
        댓글 <span className="em-1">총{el.comment}개</span>
      </h3>
      <div className="c-write">
        <div className="c-inner">
          <textarea
            value={commentWrite}
            onChange={onCommentChange}
            className="textarea1"
            autucomplate="off"
            autoCorrect="off"
            spellCheck="false"
          ></textarea>
          <div className="c-bottom">
            <button onClick={() => PostusedComment(el.id)} className="c-u-b">
              작성
            </button>
          </div>
          <div className="c-padding"></div>
          {saveUsedWrite.map((el) => {
            return (
              <UsedCommnet authRegi={authRegi} deleteC={deleteC} el={el} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UsedCommnetWrite;
