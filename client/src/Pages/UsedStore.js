import React, { useState, useEffect } from 'react';
import './UsedStore.css';
import UsedView from './UsedView';
import axios from 'axios';
import displayesAt from '../AuthModule/TimeModule';
import { useSelector, useDispatch } from 'react-redux';
import { readUsedpost } from '../modules/board';
const UsedStore = ({
  setSaveUsedWrite,
  saveUsedWrite,
  PostusedComment,
  UsedViewOpen,
  UsedList,
  setUsedList,
  setUsedViewOpen,
  // readData,
  commentWrite,
  onCommentChange,
}) => {
  // const readData = useSelector((state) => [state.board.used]);
  let token = localStorage.getItem('token');
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/category?board=used`, {
        withCredentials: true,
      })
      .then((res) => {
        let useList = res.data.categoryPost;
        setUsedList(useList);
      });
  }, [setSaveUsedWrite]);

  const ReqRead = (id) => {
    window.scrollBy(0, -9999);

    setUsedViewOpen(true);

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/post/view/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/post/${id}`, {
            withCredentials: true,
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            dispatch(readUsedpost(res.data.post[0]));
            setSaveUsedWrite(res.data.comment);
          })
          .catch((err) => console.log(err));
      });
  };

  const list = UsedList.map((el) => {
    const timeStamp = displayesAt(new Date(el.createdAt));
    return (
      <div className="used-card">
        <div className="img-box">
          <img className="used-img" alt=""></img>
        </div>
        <div className="used-content">
          <div onClick={() => ReqRead(el.id)} className="used-title1">
            {el.title}
            <em className="ems">[{el.comment}]</em>
          </div>
          <div className="used-title2">
            <div className="used-user">{el.username}</div>
            <div className="used-user">{timeStamp}</div>
          </div>
          <div className="used-title2">
            <div className="used-user">조회:{el.view}</div>
            <div className="used-user">관심{el.like}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {UsedViewOpen ? (
        <UsedView
          setSaveUsedWrite={setSaveUsedWrite}
          saveUsedWrite={saveUsedWrite}
          PostusedComment={PostusedComment}
          commentWrite={commentWrite}
          onCommentChange={onCommentChange}
          // readData={readData}
        />
      ) : null}

      <div id="used-box">
        <div className="used-wrap">{list}</div>
      </div>
    </>
  );
};

export default UsedStore;
