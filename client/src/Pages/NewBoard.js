/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';

import './NewBoard.css';

import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import displayedAt from '../AuthModule/TimeModule';
import axios from 'axios';
import Commnet from '../Components/Commnet';
import { useHistory } from 'react-router-dom';

const NewBoard = ({ authRegi, setIsOpen, isLogin }) => {
  const history = useHistory();

  const [like, setLike] = useState('');
  const [likeCount, setLikeCount] = useState('');
  const [insert, setInsert] = useState(false);
  const [chagenT, setChangeT] = useState('');
  const [changeC, setChangeC] = useState('');
  const [updateC, setUpdateC] = useState([]);

  const data = useSelector((state) => state.board.read);
  const dataId = data.map((el) => el.id);
  const toEdit = (id) => {
    history.push(`/board/edit/${id}`);
    location.reload();
  };

  const onCommnetChange = (e) => {
    setChangeC(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/post/${dataId[0]}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setChangeT(res.data.post.title);
        setChangeC(res.data.post.content);
        setLike(res.data.like);
        setLikeCount(res.data.post[0].like);
        setUpdateC(res.data.comment);
        // dispatch(commnets(res.data.comment));
      });
  }, [data]);

  const onLikeHandle = (id) => {
    if (isLogin) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/post/like`,
          {
            postId: id,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          },
        )
        .then((res) => {
          console.log(res);
          setLike(true);
          setLikeCount(res.data.likeCount);
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('로그인을 해주세요');
    }
  };

  const postComment = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/post/comment/`,
        {
          postId: id,
          content: changeC,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        setUpdateC(res.data.postList);
      });
    setChangeC('');
  };

  const onUnLikeHandle = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/post/dislike`,
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

      .catch((err) => {
        console.log(err);
      });
  };

  const onChange1 = (e) => {
    setChangeT(e.target.value);
  };

  let token = localStorage.getItem('token');

  const deletePost = (id) => {
    const AreyouDelete = confirm('게시물을 삭제 하시겠습니까?');
    if (AreyouDelete) {
      setIsOpen(false);
      axios
        .delete(
          `${process.env.REACT_APP_SERVER_URL}/post/${id}`,

          {
            headers: { authorization: `Bearer ${token}` },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            history.push('/board');
            location.reload();
          }
        })
        .catch((res) => console.log(res));
    } else {
      return;
    }
  };

  const deleteC = (id) => {
    let ok = confirm('삭제하시겠습니까?');

    if (ok) {
      axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/post/comment/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUpdateC(res.data.postList);
        });
    } else {
      return;
    }
  };

  const datas = data.map((el, idx) => {
    const timeStamp = displayedAt(new Date(el.createdAt));
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
              <span className="Newboard-info-list">{timeStamp}</span>

              <span className="Newboard-info-list">{el.username} </span>

              <span className="Newboard-info-list">추천수:{el.like}</span>

              <span className="Newboard-info-list">조회수:{el.view} </span>

              <span className="Newboard-info-list">댓글{el.comment} </span>
            </div>

            <div
              className="Newboard-title"
              dangerouslySetInnerHTML={{
                __html: el.content,
              }}
            ></div>

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
                <button onClick={() => toEdit(el.id)} className="u-b-1">
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
                    onChange={onCommnetChange}
                    value={changeC}
                    className="textarea1"
                    autucomplate="off"
                    autoCorrect="off"
                    spellCheck="false"
                  ></textarea>
                  <div className="c-bottom">
                    <button
                      onClick={() => postComment(el.id)}
                      className="c-u-b"
                    >
                      작성
                    </button>
                  </div>
                  <div className="c-padding"></div>
                  {updateC.map((el) => {
                    return (
                      <Commnet authRegi={authRegi} el={el} deleteC={deleteC} />
                    );
                  })}
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
