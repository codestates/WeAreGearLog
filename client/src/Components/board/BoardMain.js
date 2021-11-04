import React, { useEffect, useState } from 'react';
import { readpost } from '../../modules/board';
import { BsFillTriangleFill } from 'react-icons/bs';
import axios from 'axios';
import './BoardMain.css';
import { useSelector, useDispatch } from 'react-redux';
import NewBoard from '../../Pages/NewBoard';
import { Link, Route, useHistory } from 'react-router-dom';
const BoardMain = ({ authRegi }) => {
  const data = useSelector((state) => state.board.read);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [getList, setGetList] = useState([]);

  const dataId = data.map((el) => el.id);

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
            // eslint-disable-next-line no-restricted-globals
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
              <div className="b-span">{el.view}</div>
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

// import React, { useEffect, useState } from 'react';
// import { readpost } from '../../modules/board';
// import { BsFillTriangleFill } from 'react-icons/bs';
// import axios from 'axios';
// import './BoardMain.css';
// import { useSelector, useDispatch } from 'react-redux';

// const BoardMain = () => {
//   const [getList, setGetList] = useState([]);

//   let token = localStorage.getItem('token');
//   useEffect(() => {
//     axios
//       .get(`http://52.79.233.29:8080/post/`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setGetList(res.data.data);
//       });
//   }, []);

//   const dispatch = useDispatch();

//   const ReqRead = (id) => {
//     axios
//       .get(`http://52.79.233.29:8080/post/${id}`, {
//         withCredentials: true,
//         headers: { authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         dispatch(readpost(res.data.post));
//       })

//       .catch((err) => console.log(err));
//   };

//   const post = getList.map((el, idx) => {
//     return (
//       <div key={el.id} className="cards">
//         <div className="card-image">
//           <img />
//         </div>

//         <div onClick={() => ReqRead(el.id)} className="card-title">
//           {el.title} <em>[{el.comments}]</em>
//           <p>ㄹㅇㄴㄹㄴㅇㄹ</p>
//         </div>
//         <div className="card-like">
//           <BsFillTriangleFill />
//           <span className="handc">{el.like}</span>
//         </div>

//         <div className="card-user">{el.username}</div>
//         <div className="card-read">{el.view}</div>
//       </div>
//     );
//   });

//   return (
//     <div className="b-m-b">
//       <div className="flex-warp">
//         <div className="flexContainer">
//           <div className="card-container1">{post}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BoardMain;

// .b-m-b {
//   display: flex;
// }
// .card-title {
//   padding: 10px;
//   width: 50%;
//   height: 70px;
//   border: 1px solid black;
// }
// .card-like {
//   display: flex;
//   width: 60px;
//   height: 70px;
//   border: 1px solid black;
// }
// /* 중앙정렬 */
// .card-read {
//   display: flex;
//   height: 70px;
//   width: 50px;
//   border: 1px solid black;
// }
// .flexContainer {
//   margin-bottom: 150px;
//   width: 100%;
//   display: flex;
// }
// .card-user {
//   display: flex;
//   width: 60px;
//   height: 70px;
//   border: 1px solid black;
// }
// .b-n {
//   z-index: 9999;
// }
// .card-container1 {
//   flex-grow: 1;
//   width: 50%;
//   height: 30vh;

//   display: flex;
//   flex-wrap: wrap;
//   /* justify-content: left; */
//   overflow: auto;
// }

// .cards {
//   margin-top: 10px;
//   margin-bottom: 10px;
//   margin-left: 10px;
//   margin-right: 10px;
//   padding: 2px;
//   display: flex;
//   height: 100px;
//   width: 70%;
//   background-color: white;
//   border-radius: 5px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
//   transition: all 0.3s ease;
// }
// .card-image {
//   border: 1px solid black;
//   width: 20%;
//   height: 70px;
// }

// .cards:hover {
//   box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
// }

// .flex-warp {
//   width: 100%;
//   height: 55vh;
// }

// @media screen and (max-width: 1220px) {
//   .card {
//     flex: 0 0 40%;
//     margin-left: 50px;
//   }
// }
// @media screen and (max-width: 768px) {
//   .card {
//     height: 300px;

//     flex: 0 40%;
//   }
// }
// @media screen and (max-width: 649px) {
//   .card {
//     flex: 50%;
//   }
// }

// @media screen and (max-width: 400px) {
//   .card {
//     height: 300px;
//     margin-left: 15px;
//     flex: 0 100%;
//   }
// }
