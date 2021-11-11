/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { readpost } from '../../modules/board';
import { FcLike } from 'react-icons/fc';
import axios from 'axios';
import './BoardMain.css';
import { useDispatch } from 'react-redux';
import NewBoard from '../../Pages/NewBoard';
import Pagination from '../Pagination';
import displayedAt from '../../AuthModule/TimeModule';
import AfterSearch from './AfterSearch';

const BoardMain = ({
  afterSearch,
  saveSearch,
  authRegi,
  isLogin,
  myListOpen,
  setMyListOpen,
  getList,
  setGetList,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [myCurrnetPage, setMyCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [isOpen, setIsOpen] = useState(false);
  // const [getList, setGetList] = useState([]);
  // const [searchs, setSearchs] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = getList.slice(indexOfFirstPost, indexOfLastPost);

  const SearchSave = saveSearch.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const onMyList = () => {
    setMyListOpen(!myListOpen);
  };
  let token = localStorage.getItem('token');

  const dispatch = useDispatch();

  const ReqRead = (id) => {
    window.scrollBy(0, -9999);

    setIsOpen(true);
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
            console.log('post', res);
            dispatch(readpost(res.data.post));
          })
          .catch((err) => console.log(err));
      });
  };

  const post = currentPosts.map((el, idx) => {
    const timeStamp = displayedAt(new Date(el.createdAt));

    return (
      <div key={el.id} className="b-list">
        <div className="board-list">
          <img className="b-img" alt="" src={el.profile_img} />

          <div className="b-tNd">
            <div onClick={() => ReqRead(el.id)} className="b-p1">
              {el.title} <em className="ems">[{el.comment}]</em>
            </div>

            <div className="b-p">
              <div className="b-span">{timeStamp}</div>

              <div className="b-span">{el.username}</div>
              <div className="b-span">조회수:{el.view}</div>
              <div className="b-span">
                <FcLike size="20" />
                {el.like}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  const searchAfter = SearchSave.map((el) => {
    const timeStamp = displayedAt(new Date(el.createdAt));
    return (
      <div key={el.id} className="b-list">
        <div className="board-list">
          <img className="b-img" alt="" src={el.profile_img} />

          <div className="b-tNd">
            <div onClick={() => ReqRead(el.id)} className="b-p1">
              {el.title} <em className="ems">[{el.comment}]</em>
            </div>

            <div className="b-p">
              <div className="b-span">{timeStamp}</div>

              <div className="b-span">{el.username}</div>
              <div className="b-span">조회수:{el.view}</div>
              <div className="b-span">
                <FcLike size="20" />
                {el.like}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const mylist = getList.filter((el) => {
    return el.username === authRegi.username;
  });

  const getMyList = mylist.slice(indexOfFirstPost, indexOfLastPost);

  const myLi = getMyList.map((el) => {
    const timeStamp = displayedAt(new Date(el.createdAt));
    return (
      <div key={el.id} className="b-list">
        <div className="board-list">
          <img className="b-img" alt="" src={el.profile_img} />

          <div className="b-tNd">
            <div onClick={() => ReqRead(el.id)} className="b-p1">
              {el.title} <em className="ems">[{el.comment}]</em>
            </div>

            <div className="b-p">
              <div className="b-span">{timeStamp}</div>

              <div className="b-span">{el.username}</div>
              <div className="b-span">조회수:{el.view}</div>
              <div className="b-span">
                <FcLike size="20" />
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
        <>
          <NewBoard
            isLogin={isLogin}
            getList={getList}
            setGetList={setGetList}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            authRegi={authRegi}
          />
        </>
      ) : null}
      {afterSearch ? (
        <>
          {myListOpen ? (
            <div>
              <div id="box">
                <div className="b-m-b1">
                  {post}
                  <div className="b-footer">
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={getList.length}
                      paginate={paginate}
                    />
                  </div>
                  <div className="b-pad"></div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div id="box">
                <div className="b-m-b1">
                  {myLi}
                  <div className="b-footer">
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={mylist.length}
                      paginate={paginate}
                    />
                  </div>
                  <div className="b-pad"></div>
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

export default BoardMain;
