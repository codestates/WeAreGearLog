/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import UsedCommnetWrite from '../Components/board/Used/UsedCommnetWrite';
import UsedDU from '../Components/board/Used/UsedDU';
import UsedLike from '../Components/board/Used/UsedLike';
import './UsedView.css';
import displayedAt from '../AuthModule/TimeModule';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import UsedChat from '../Components/board/Used/UsedChat';
import { VscTriangleDown } from 'react-icons/vsc';
import { GrView } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const UsedView = ({
  authRegi,
  isLogin,
  setSaveUsedWrite,
  saveUsedWrite,
  PostusedComment,
  commentWrite,
  onCommentChange,
}) => {
  console.log('auth', authRegi);
  let token = localStorage.getItem('token');
  const [like, setLike] = useState('');
  const [likeCount, setLikeCount] = useState('');
  const data = useSelector((state) => [state.board.used]);
  const [isOpen, setIsOpen] = useState(false);
  const dataId = data.map((el) => el.id);
  const [udOpen, setUdOpen] = useState(true);
  const [modal, setModal] = useState(false);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/post/${dataId[0]}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // setSaveUsedWrite(res.data.comment);
        setLike(res.data.like);
        setLikeCount(res.data.post[0].like);
      });
  }, []);
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
  const modalFalse = () => {
    setModal(!modal);
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
  const toEdit = (id) => {
    history.push(`/used/edit/${id}`);
    location.reload();
  };

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
            console.log(res);
            history.push('/used/store');
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
          setSaveUsedWrite(res.data.postList);
        });
    } else {
      return;
    }
  };

  const viewData = data.map((el) => {
    const timeStamp = displayedAt(new Date(el.createdAt));
    return (
      <div key={el.id} className="used-read">
        <div className="used-title">{el.title}</div>
        <div className="used-info">
          <span onClick={modalFalse} className="used-info-list1">
            {el.username}
            <VscTriangleDown />
            {modal ? (
              <Link to={`/chatroom/${el.id}`}>
                <UsedChat modal={modal} setModal={setModal} />
              </Link>
            ) : null}
          </span>

          <span className="used-info-list">{timeStamp}</span>

          <span className="used-info-list">
            <GrView />:{el.view}
          </span>

          <span className="used-info-list">
            <FcLike />:{el.like}
          </span>
        </div>
        <div
          className="used-main-view"
          dangerouslySetInnerHTML={{
            __html: el.content,
          }}
        ></div>
        <UsedLike
          el={el}
          onLikeHandle={onLikeHandle}
          onUnLikeHandle={onUnLikeHandle}
          like={like}
          likeCount={likeCount}
        />{' '}
        {authRegi.username !== el.username ? null : (
          <UsedDU toEdit={toEdit} el={el} deletePost={deletePost} />
        )}
        <UsedCommnetWrite
          authRegi={authRegi}
          el={el}
          deleteC={deleteC}
          saveUsedWrite={saveUsedWrite}
          PostusedComment={PostusedComment}
          commentWrite={commentWrite}
          onCommentChange={onCommentChange}
        />
      </div>
    );
  });

  return (
    <div className="UsedBoard">
      <div className="used-view">{viewData}</div>
    </div>
  );
};

export default UsedView;
