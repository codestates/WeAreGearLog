import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
const UsedLike = ({ el, like, likeCount, onLikeHandle, onUnLikeHandle }) => {
  return (
    <div>
      {like ? (
        <div className="crud-button">
          <button onClick={() => onUnLikeHandle(el.id)} className={'crud-bt'}>
            <FcLike size="30" />
            {likeCount}
          </button>
        </div>
      ) : (
        <div onClick={() => onLikeHandle(el.id)} className="crud-button">
          <button className={'crud-bt'}>
            <AiOutlineHeart size="30" /> {likeCount}
          </button>
        </div>
      )}
    </div>
  );
};

export default UsedLike;
