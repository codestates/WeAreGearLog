import React, { useState, useEffect } from 'react';
import './UsedStore.css';
import UsedView from './UsedView';
import axios from 'axios';
import displayesAt from '../AuthModule/TimeModule';
import { useSelector, useDispatch } from 'react-redux';
import { readUsedpost } from '../modules/board';
import Pagination from '../Components/board/Used/Pagination';
import { FcLike } from 'react-icons/fc';
import AfterSearch from '../Components/board/Used/AfterSearch';

import { GrView } from 'react-icons/gr';

const UsedStore = ({
  afterSearch,
  saveSearch,
  authRegi,
  setSaveUsedWrite,
  saveUsedWrite,
  PostusedComment,
  UsedViewOpen,
  UsedList,
  setUsedList,
  setUsedViewOpen,
  commentWrite,
  onCommentChange,
  isLogin,
  myListOpen,
}) => {
  // const readData = useSelector((state) => [state.board.used]);
  const [currentPage, setCurrentPage] = useState(1);
  const [myCurrnetPage, setMyCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = UsedList.slice(indexOfFirstPost, indexOfLastPost);
  const SearchSave = saveSearch.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let token = localStorage.getItem('token');
  const dispatch = useDispatch();

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

  const mylist = UsedList.filter((el) => {
    return el.username === authRegi.username;
  });

  const getMyList = mylist.slice(indexOfFirstPost, indexOfLastPost);

  const myLi = getMyList.map((el) => {
    const timeStamp = displayesAt(new Date(el.createdAt));
    return (
      <div className="used-card">
        <div className="img-box">
          <img width="100vh" className="used-img" alt="" src={el.img}></img>
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
            <div className="used-user">:{el.view}</div>
            <div className="used-user">관심{el.like}</div>
          </div>
        </div>
      </div>
    );
  });
  const searchAfter = SearchSave.map((el) => {
    const timeStamp = displayesAt(new Date(el.createdAt));
    return (
      <div className="used-card">
        <div className="img-box">
          <img width="100vh" className="used-img" alt="" src={el.img}></img>
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
            <div className="used-user">관심:{el.like}</div>
          </div>
        </div>
      </div>
    );
  });

  const list = currentPosts.map((el) => {
    const timeStamp = displayesAt(new Date(el.createdAt));
    return (
      <div className="used-card">
        <div className="img-box">
          <img width="100vh" className="used-img" alt="" src={el.img}></img>
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
            <div className="used-user">
              <GrView />:{el.view}
            </div>
            <div className="used-user">
              <FcLike />:{el.like}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {UsedViewOpen ? (
        <UsedView
          authRegi={authRegi}
          isLogin={isLogin}
          setSaveUsedWrite={setSaveUsedWrite}
          saveUsedWrite={saveUsedWrite}
          PostusedComment={PostusedComment}
          commentWrite={commentWrite}
          onCommentChange={onCommentChange}
          // readData={readData}
        />
      ) : null}

      {afterSearch ? (
        <>
          {myListOpen ? (
            <div id="used-box">
              <div className="used-wrap">
                {list}
                <div className="b-footer">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={UsedList.length}
                    paginate={paginate}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div id="used-box">
              <div className="used-wrap">
                {myLi}
                <div className="b-footer">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={mylist.length}
                    paginate={paginate}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <AfterSearch
          searchAfter={searchAfter}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default UsedStore;
