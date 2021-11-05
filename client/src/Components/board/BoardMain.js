/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { readpost, commnets } from '../../modules/board';
import { BsFillTriangleFill } from 'react-icons/bs';
import axios from 'axios';
import './BoardMain.css';
import { useSelector, useDispatch } from 'react-redux';
import NewBoard from '../../Pages/NewBoard';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
const BoardMain = ({ authRegi }) => {
  const data = useSelector((state) => state.board.read);

  const [isOpen, setIsOpen] = useState(false);
  const [getList, setGetList] = useState([]);
  const [getComment, setGetComment] = useState([]);

  let token = localStorage.getItem('token');
  useEffect(() => {
    axios
      .get(`http://52.79.233.29:8080/post/`, {
        withCredentials: true,
      })
      .then((res) => {
        setGetList(res.data.data);
      });
  }, []);

  const dispatch = useDispatch();

  const ReqRead = (id) => {
    window.scrollBy(0, -9999);

    setIsOpen(true);
    axios
      .get(`http://52.79.233.29:8080/post/view/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        axios
          .get(`http://52.79.233.29:8080/post/${id}`, {
            withCredentials: true,
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            dispatch(readpost(res.data.post));
          })
          .catch((err) => console.log(err));
      });
  };

  const post = getList.map((el, idx) => {
    return (
      <div key={el.id} className="b-list">
        <div className="board-list">
          <div className="b-img"></div>
          <div className="b-tNd">
            <div onClick={() => ReqRead(el.id)} className="b-p1">
              {el.title} <em className="ems">[{el.comments}]</em>
            </div>

            <div className="b-p">
              <div className="b-span">5시간전</div>

              <div className="b-span">{el.username}</div>
              <div className="b-span">조회수:{el.view}</div>
              <div className="b-span">
                <BsFillTriangleFill />
                {el.like}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {isOpen ? (
        <NewBoard isOpen={isOpen} setIsOpen={setIsOpen} authRegi={authRegi} />
      ) : null}

      <div id="box">
        <div className="b-m-b1">
          {post}
          <div className="b-footer">
            <button className="b-f-b">이전</button>
            <button className="b-f-b">다음</button>
          </div>
          <div className="b-pad"></div>
        </div>
      </div>
    </>
  );
};

export default BoardMain;
