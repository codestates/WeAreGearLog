import React, { useEffect, useState } from 'react';
import { readpost } from '../../modules/board';
import { BsFillTriangleFill } from 'react-icons/bs';
import axios from 'axios';
import './BoardMain.css';
import { useSelector, useDispatch } from 'react-redux';

const BoardMain = () => {
  const [getList, setGetList] = useState([]);
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
    axios
      .get(`http://52.79.233.29:8080/post/${id}`, {
        withCredentials: true,
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(readpost(res.data.post));
      })

      .catch((err) => console.log(err));
  };

  const post = getList.map((el, idx) => {
    return (
      <div key={el.id} className="cards">
        <div className="card-image">
          <img />
        </div>

        <div onClick={() => ReqRead(el.id)} className="card-title">
          {el.title} <em>[{el.comments}]</em>
          <p>ㄹㅇㄴㄹㄴㅇㄹ</p>
        </div>
        <div className="card-like">
          <BsFillTriangleFill />
          <span className="handc">{el.like}</span>
        </div>

        <div className="card-user">{el.username}</div>
        <div className="card-read">{el.view}</div>
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
