import React, { useEffect, useState } from 'react';
import BoardNav from '../Components/board/Used/BoardNav';
import Editor from '../Components/board/Used/Editor';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import UsedStore from './UsedStore';
import Usedsujung from './Usedsujung';
const Used = ({ authRegi }) => {
  let token = localStorage.getItem('token');

  const [commentWrite, setCommentWrite] = useState('');
  const [afterSearch, setAfterSearch] = useState(true);
  const [search, setSearch] = useState('');
  const data = useSelector((state) => [state.board.used]);
  const [UsedViewOpen, setUsedViewOpen] = useState(false);
  const [saveUsedWrite, setSaveUsedWrite] = useState([]); //댓글저장소
  const [myListOpen, setMyListOpen] = useState(true);
  const [saveSearch, setSaveSearch] = useState([]);
  const [usedTitle, setUsedTitle] = useState(''); //목록
  const [title, setTitle] = useState('');
  const [state, setState] = useState({
    value: null,
  }); //글쓰기쪽
  // const dataId = data.map((el) => el.id);
  const [UsedList, setUsedList] = useState([]);

  const onSubmit = () => {
    //서버에 제출
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/filteredpost?search=${search}`)

      .then((res) => {});
  };

  const onMyList = () => {
    setMyListOpen(!myListOpen);
  };

  const handleChange = (value) => {
    //본문
    setState({ value });
  };

  // eslint-disable-next-line no-use-before-define

  const onTitleChange = (e) => {
    //중고글쓰기 타이틀
    setUsedTitle(e.target.value);
  };

  const onCommentChange = (e) => {
    setCommentWrite(e.target.value);
  };

  // useEffect(() => {
  //   console.log('123123', data);
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/post/${dataId[0]}`, {
  //       headers: { authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {
  //       setSaveUsedWrite(res.data.comment);
  //     });
  // }, []);

  const PostusedComment = (id) => {
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
  };

  return (
    <div>
      <BoardNav authRegi={authRegi} />

      <Route path="/used/store">
        <UsedStore
          setSaveUsedWrite={setSaveUsedWrite}
          saveUsedWrite={saveUsedWrite}
          PostusedComment={PostusedComment}
          commentWrite={commentWrite}
          onCommentChange={onCommentChange}
          // readData={data}
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
        />
      </Route>
      <Route path="/used/edit">
        <Usedsujung
          setTitle={setTitle}
          onTitleChange={onTitleChange}
          handleChange={handleChange}
          title={title}
        />
      </Route>
    </div>
  );
};

export default Used;
