/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import './NewBoard.css';

import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { BsImage } from 'react-icons/bs';
import axios from 'axios';
import Commnet from '../Components/Commnet';

const NewBoard = ({ authRegi, udeleteB, setIsOpen }) => {
  const data = useSelector((state) => state.board.read);
  const [like, setLike] = useState('');
  const [likeCount, setLikeCount] = useState('');
  const [insert, setInsert] = useState(false);
  const [chagenT, setChangeT] = useState('');
  const [changeC, setChangeC] = useState('');

  const dataId = data.map((el) => el.id);

  useEffect(() => {
    axios
      .get(`http://52.79.233.29:8080/post/${dataId[0]}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setChangeT(res.data.post.title);
        setChangeC(res.data.post.content);
        setLike(res.data.like);
        setLikeCount(res.data.post[0].like);
        console.log(res.data.post[0].like);
      });
  }, [data]);

  const onPutChange = (id) => {
    axios
      .patch(
        `http://52.79.233.29:8080/post/`,
        {
          postId: id,
          title: chagenT,
          content: changeC,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        if (res.status === 201) {
          location.reload();
          setInsert(insert);
        }
      });
  };

  const onLikeHandle = (id) => {
    axios
      .post(
        `http://52.79.233.29:8080/post/like`,
        {
          postId: id,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        setLike(true);
        setLikeCount(res.data.likeCount);
      })
      // .then(() => {
      //   axios
      //     .get(`http://52.79.233.29:8080/post/${dataId[0]}`, {
      //       headers: { authorization: `Bearer ${token}` },
      //     })
      //     .then((res) => {
      //       setLikeCount(res.data.post[0].like);
      //       console.log(res.data.post[0].like);
      //     });
      // })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUnLikeHandle = (id) => {
    axios
      .post(
        `http://52.79.233.29:8080/post/dislike`,
        {
          postId: id,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        setLike(false);
        setLikeCount(res.data.likeCount);
      })
      // .then(() => {
      //   axios
      //     .get(`http://52.79.233.29:8080/post/${dataId[0]}`, {
      //       headers: { authorization: `Bearer ${token}` },
      //     })
      //     .then((res) => {
      //       setLikeCount(res.data.post[0].like);
      //       console.log(res.data.post[0].like);
      //     });
      // })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange1 = (e) => {
    setChangeT(e.target.value);
  };
  const onChange2 = (e) => {
    setChangeC(e.target.value);
  };
  let token = localStorage.getItem('token');

  const deletePost = (id) => {
    const AreyouDelete = confirm('게시물을 삭제 하시겠습니까?');
    if (AreyouDelete) {
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
          }
        })
        .catch((res) => console.log(res));
    } else {
      return;
    }
  };

  const datas = data.map((el, idx) => {
    return (
      <>
        <div key={el.id} className="Editor1">
          <div className="Read">
            {insert ? (
              <textarea
                contentEditable="true"
                className="textarea1"
                autucomplate="off"
                autoCorrect="off"
                spellCheck="false"
                autocapitalize="off"
                value={chagenT}
                onChange={onChange1}
                className="titlez"
              >
                {el.title}
              </textarea>
            ) : (
              <div className="titlez">{el.title}</div>
            )}
            <div className="Newboard-info">
              <span className="Newboard-info-list">작성시간 </span>

              <span className="Newboard-info-list">{el.username} </span>

              <span className="Newboard-info-list">추천수</span>

              <span className="Newboard-info-list">{el.view} </span>

              <span className="Newboard-info-list">댓글{el.comment} </span>
            </div>
            {insert ? (
              <textarea
                contentEditable="true"
                value={changeC}
                onChange={onChange2}
                className="textarea1"
                autucomplate="off"
                autoCorrect="off"
                spellCheck="false"
              >
                {el.content}
              </textarea>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: el.content,
                }}
              ></div>
            )}
            {like ? (
              <div className="crud-button">
                <button
                  onClick={() => onUnLikeHandle(el.id)}
                  className={'crud-bt'}
                >
                  <FcLike size="30" />

                  {likeCount}
                </button>
              </div>
            ) : (
              <div className="crud-button">
                <button
                  onClick={() => onLikeHandle(el.id)}
                  className={'crud-bt'}
                >
                  <AiOutlineHeart size="30" /> {likeCount}
                </button>
              </div>
            )}

            {authRegi.username !== el.username ? null : (
              <div className={'upload-b'}>
                {!insert ? null : (
                  <button onClick={() => onPutChange(el.id)} className="u-b-1">
                    올리기
                  </button>
                )}

                <button onClick={() => setInsert(!insert)} className="u-b-1">
                  수정
                </button>

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
                댓글 <span className="em-1">총 {el.comment}개</span>
              </h3>
              <div className="c-write">
                <div className="c-inner">
                  <textarea
                    className="textarea1"
                    autucomplate="off"
                    autoCorrect="off"
                    spellCheck="false"
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
