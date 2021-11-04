/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import './NewBoard.css';

import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { BsImage } from 'react-icons/bs';
import axios from 'axios';
import Commnet from '../Components/Commnet';
import { Link, useHistory } from 'react-router-dom';

const NewBoard = ({ authRegi, udeleteB, setIsOpen }) => {
  const history = useHistory();
  const data = useSelector((state) => state.board.read);
  const [like, setLike] = useState('');
  const [likeCount, setLikeCount] = useState('');
  const [insert, setInsert] = useState(false);
  const [chagenT, setChangeT] = useState('');
  const [changeC, setChangeC] = useState('');

  const dataId = data.map((el) => el.id);

  const toEdit = (id) => {
    history.push(`/board/edit/${id}`);
    location.reload();
  };

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
      });
  }, [data]);

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
      })
      .then(() => {
        axios
          .get(`http://52.79.233.29:8080/post/${dataId[0]}`, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setLikeCount(res.data.post[0].like);
            console.log(res.data.post[0].like);
          });
      })
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
      })
      .then(() => {
        axios
          .get(`http://52.79.233.29:8080/post/${dataId[0]}`, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setLikeCount(res.data.post[0].like);
            console.log(res.data.post[0].like);
          });
      })
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
            history.push('/board');
            location.reload();
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
              <span className="Newboard-info-list">작성시간: </span>

              <span className="Newboard-info-list">{el.username} </span>

              <span className="Newboard-info-list">추천수:{el.like}</span>

              <span className="Newboard-info-list">조회수:{el.view} </span>

              <span className="Newboard-info-list">댓글{el.comment} </span>
            </div>

            <div
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
