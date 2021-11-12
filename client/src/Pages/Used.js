import React, { useEffect, useState } from 'react';
import BoardNav from '../Components/board/Used/BoardNav';
import Editor from '../Components/board/Used/Editor';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import UsedStore from './UsedStore';
import Usedsujung from './Usedsujung';
import BoardSearch from '../Components/board/Used/BoardSearch';
const Used = ({ authRegi, isLogin }) => {
  const data = useSelector((state) => [state.board.used]);
  console.log(data);
  const dataId = data.map((el) => el.id);
  let token = localStorage.getItem('token');
  const [commentWrite, setCommentWrite] = useState('');
  const [afterSearch, setAfterSearch] = useState(true);
  const [search, setSearch] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [saveSearch, setSaveSearch] = useState([]);
  const [UsedViewOpen, setUsedViewOpen] = useState(false);
  const [saveUsedWrite, setSaveUsedWrite] = useState([]); //댓글저장소
  const [myListOpen, setMyListOpen] = useState(true);

  const [usedTitle, setUsedTitle] = useState(''); //목록
  const [title, setTitle] = useState(data[0].title); //들어가고있음
  const [state, setState] = useState({
    value: null,
  }); //글쓰기쪽
  const [UsedList, setUsedList] = useState([]);

  console.log(saveUsedWrite);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/category?board=used`, {
        withCredentials: true,
      })
      .then((res) => {
        let useList = res.data.categoryPost;
        setUsedList(useList);
      });
  }, []);
  console.log();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/post/${dataId[0]}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSaveUsedWrite(res.data.comment);
      });
  }, []);

  const onSubmitSearch = () => {
    //서버에 제출
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/filteredpost/used?search=${search}`,
      )

      .then((res) => {
        setSaveSearch(res.data.filtered);
        setAfterSearch(false);
      });
  };

  const onMyList = () => {
    setMyListOpen(!myListOpen);
  };

  const handleChange = (value) => {
    //본문
    setState({ value });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/filteredpost/used?search=${search}`,
        )
        .then((res) => {
          setSaveSearch(res.data.filtered);
          setAfterSearch(false);
        });
    }
  };

  // eslint-disable-next-line no-use-before-define

  const onTitleChange = (e) => {
    //중고글쓰기 타이틀
    setTitle(e.target.value);
  };

  const onCommentChange = (e) => {
    setCommentWrite(e.target.value);
  };

  const PostusedComment = (id) => {
    if (isLogin) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/post/comment/`,
          {
            postId: id,
            content: commentWrite,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          },
        )
        .then((res) => {
          console.log('@@@@@@@', res);
          setSaveUsedWrite(res.data.postList);
        });
      setCommentWrite('');
    } else {
      alert('로그인을 해주세요');
    }
  };

  const searchChangeHanle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <BoardNav
        authRegi={authRegi}
        afterSearch={afterSearch}
        onMyList={onMyList}
        setMyListOpen={setMyListOpen}
        myListOpen={myListOpen}
        isLogin={isLogin}
      />

      <BoardSearch
        afterSearch={afterSearch}
        saveSearch={saveSearch}
        onKeyPress={onKeyPress}
        onSubmit={onSubmitSearch}
        searchChangeHanle={searchChangeHanle}
        search={search}
      />

      <Route path="/used/store">
        <UsedStore
          myListOpen={myListOpen}
          setMyListOpen={setMyListOpen}
          afterSearch={afterSearch}
          authRegi={authRegi}
          isLogin={isLogin}
          setSaveUsedWrite={setSaveUsedWrite}
          saveUsedWrite={saveUsedWrite}
          PostusedComment={PostusedComment}
          commentWrite={commentWrite}
          onCommentChange={onCommentChange}
          saveSearch={saveSearch}
          setUsedViewOpen={setUsedViewOpen}
          setUsedList={setUsedList}
          UsedList={UsedList}
          UsedViewOpen={UsedViewOpen}
        />
      </Route>

      <Route path="/used/write">
        <Editor
          onTitleChange={onTitleChange}
          handleChange={handleChange}
          state={state}
          setState={setState}
          titles={usedTitle}
          setTitles={setUsedTitle}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
        />
      </Route>
      <Route path="/used/edit">
        <Usedsujung
          setTitle={setTitle}
          onTitleChange={onTitleChange}
          handleChange={handleChange}
          title={title}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
        />
      </Route>
    </div>
  );
};

export default Used;
