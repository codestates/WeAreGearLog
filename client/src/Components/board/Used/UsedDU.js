import React from 'react';
import { useHistory } from 'react-router-dom';
const UsedDU = ({ deletePost, el, toEdit }) => {
  const history = useHistory();
  return (
    <div className={'upload-b'}>
      <button onClick={toEdit} className="u-b-1">
        수정
      </button>

      <button onClick={() => deletePost(el.id)} className="u-b-1">
        삭제
      </button>
    </div>
  );
};

export default UsedDU;
