import React, { useState } from 'react';
import BoardNav from '../Components/board/Used/BoardNav';
import Editor from '../Components/board/Used/Editor';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import UsedStore from './UsedStore';
import Usedsujung from './Usedsujung';
const Used = ({ authRegi }) => {
  const [afterSearch, setAfterSearch] = useState(true);
  const [search, setSearch] = useState('');
  const data = useSelector((state) => state);
  console.log('data', data);

  const [UsedViewOpen, setUsedViewOpen] = useState(false);
  const [myListOpen, setMyListOpen] = useState(true);
  const [saveSearch, setSaveSearch] = useState([]);
  const [usedTitle, setUsedTitle] = useState('');
  const [title, setTitle] = useState(data);
  const [state, setState] = useState({
    value: null,
  }); //글쓰기쪽

  const [UsedList, setUsedList] = useState([]);

  console.log('중고리스트', UsedList);

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

  return (
    <div>
      <BoardNav authRegi={authRegi} />

      <Route path="/used/store">
        <UsedStore
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
