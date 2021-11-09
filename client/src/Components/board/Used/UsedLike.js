import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
const UsedLike = () => {
  return (
    <div>
      {FcLike ? (
        <div className="crud-button">
          <button className={'crud-bt'}>
            <FcLike size="30" />5
          </button>
        </div>
      ) : (
        <div className="crud-button">
          <button className={'crud-bt'}>
            <AiOutlineHeart size="30" /> 5
          </button>
        </div>
      )}
    </div>
  );
};

export default UsedLike;
