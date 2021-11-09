import React from 'react';

const UsedDU = ({ deletePost, el }) => {
  return (
    <div className={'upload-b'}>
      <button className="u-b-1">수정</button>

      <button onClick={() => deletePost(el.id)} className="u-b-1">
        삭제
      </button>
    </div>
  );
};

export default UsedDU;
