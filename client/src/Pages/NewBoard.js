/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import './NewBoard.css';
import { Link } from 'react-router-dom';
import Button from '../Components/common/Button';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { BsImage } from 'react-icons/bs';
import axios from 'axios';
import Commnet from '../Components/Commnet';
const NewBoard = ({ authRegi, udeleteB, setIsOpen }) => {
  const [udButton, setUdButton] = useState(false);

  let token = localStorage.getItem('token');

  const deletePost = (id) => {
    setIsOpen(false);
    axios
      .delete(
        `http://52.79.233.29:8080/post/${id}`,

        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          location.reload();
        }
      })
      .catch((res) => console.log(res));
  };

  const data = useSelector((state) => state.board.read);

  const datas = data.map((el, idx) => {
    return (
      <>
        <div className="Editor1">
          <div className="Read">
            <input disabled className="titlez" placeholder={el.title} />
            <div className="Newboard-info">
              <span className="Newboard-info-list">작성시간 </span>

              <span className="Newboard-info-list">{el.username} </span>

              <span className="Newboard-info-list">추천수</span>

              <span className="Newboard-info-list">{el.view} </span>

              <span className="Newboard-info-list">댓글{el.comment} </span>
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
            {authRegi.username !== el.username ? null : (
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
            )}

            <div className="c-top">
              <h3 className="c-top-in">
                댓글 <span className="em-1">총 32개</span>
              </h3>
              <div className="c-write">
                <div className="c-inner">
                  <textarea
                    className="textarea1"
                    autucomplate="off"
                    autoCorrect="off"
                    spellCheck="false"
                    autocapitalize="off"
                  ></textarea>
                  <div className="c-bottom">
                    <div className="c-u-i">
                      <BsImage color="green" size="20" />
                    </div>
                    <button className="c-u-b">작성</button>
                  </div>
                  <div className="c-padding"></div>
                  <Commnet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <div className="NewBoard">{datas}</div>;
};

export default NewBoard;
