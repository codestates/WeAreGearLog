import React, { useEffect, useState } from 'react';
import './NewBoard.css';
import { Link } from 'react-router-dom';
import Button from '../Components/common/Button';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import axios from 'axios';
const NewBoard = () => {
  const [udButton, setUdButton] = useState(false);
  const [dwButton, setDwButton] = useState(false);

  let token = localStorage.getItem('token');

  useEffect(() => {});

  const deletePost = (id) => {
    axios
      .delete(
        `http://52.79.233.29:8080/post/${id}`,

        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  const data = useSelector((state) => state.board.read);

  const datas = data.map((el, idx) => {
    return (
      <div className="Editor1">
        <div className="Read">
          <input disabled className="titlez" placeholder={el.title} />
          <div className="Newboard-info">
            <div>
              <span className="Newboard-info-list">작성시간 </span>

              <span className="Newboard-info-list">{el.username} </span>
            </div>
            <div>
              <span className="Newboard-info-list">추천수</span>

              <span className="Newboard-info-list">{el.view} </span>

              <span className="Newboard-info-list">{el.comment} </span>
            </div>
          </div>
          <div
            className="textarea1"
            autucomplate="off"
            autoCorrect="off"
            spellCheck="false"
            autocapitalize="off"
          >
            {el.content}
          </div>
          <div className="crud-button">
            <button
              onClick={() => setUdButton(!udButton)}
              className={'crud-bt'}
            >
              {udButton ? <BiUpArrow color="blue" /> : <BiUpArrow />}
            </button>
          </div>
          <div className={'upload-b'}>
            <button className="u-b-1">수정</button>

            <button
              onClick={() => {
                deletePost(el.id);
              }}
              className="u-b-1"
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="NewBoard">{datas}</div>;
};

export default NewBoard;
