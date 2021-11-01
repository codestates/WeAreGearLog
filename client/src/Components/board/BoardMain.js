import React, { useState } from 'react';
import { likes } from '../../modules/board';
import { BsFillTriangleFill } from 'react-icons/bs';

import './BoardMain.css';
import { useSelector, useDispatch } from 'react-redux';

const BoardMain = ({ authRegi }) => {
  const [findId, setfindId] = useState(0);
  const dispatch = useDispatch();

  const handleIdClick = (id) => {
    setfindId(id);

    dispatch(likes(id));
  };

  const state = useSelector((state) => state.board.items);

  console.log('12312', state);

  const post = state.map((el, idx) => {
    return (
      <div key={el.id} className="cards">
        <div className="card-image">
          <img />
        </div>
        <div className="card-title">
          {el.input}

          <em>[{el.comments}]</em>
        </div>
        <div className="card-like">
          <BsFillTriangleFill />
          <span onClick={() => handleIdClick(el.id)} className="handc">
            {el.like}
          </span>
        </div>
        <div className="card-user">{authRegi.username}</div>
        <div className="card-read">{el.view}</div>
        <div>fdsfdf</div>
      </div>
    );
  });

  return (
    <div className="b-m-b">
      <div className="flex-warp">
        <div className="flexContainer">
          <div className="card-container">{post}</div>
        </div>
      </div>
    </div>
  );
};

export default BoardMain;

{
  /* <div className="card">
              <div className="thumnail">
                <img alt=""></img>
              </div>

              <div className="card-2">제목:</div>

              <div className="card-c">
                <FiHeart />
                <span className="handc">3</span>
                <span className="handc-1">작성자:</span>
              </div>

              <div className="card-c">
                <BiCommentDetail /> <span className="handc">5</span>
                <span className="handc-1">조회수:</span>
              </div>
            </div> */
}
