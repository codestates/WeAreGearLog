import React, { useState } from 'react';
import BoardNav from '../Components/board/BoardNav';
import { Route, Switch, useHistory } from 'react-router-dom';
import BoardMainContainer from '../container/BoardMainContainer';
import Editor from '../Components/board/Editor';
import WriteEdit from './WriteEdit';
import { useSelector } from 'react-redux';
import BoardSearch from '../Components/board/BoardSearch';
import axios from 'axios';

const Board = ({ authRegi, isLogin }) => {
  const [afterSearch, setAfterSearch] = useState(true);
  const [search, setSearch] = useState('');
  const data = useSelector((state) => state.board.read);
  const [myListOpen, setMyListOpen] = useState(true);
  const [saveSearch, setSaveSearch] = useState([]);
  const [titles, setTitles] = useState('');
  const [title, setTitle] = useState(data[0].title);
  const [state, setState] = useState({
    value: null,
  }); //글쓰기쪽
  const history = useHistory();
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/filteredpost?search=${search}`,
        )
        .then((res) => {
          setSaveSearch(res.data.filtered);
          setAfterSearch(false);
        });
    }
  };

  const onSubmitSearch = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/filteredpost?search=${search}`)

      .then((res) => {
        setSaveSearch(res.data.filtered);
        setAfterSearch(false);
      });
  };

  const onMyList = () => {
    setMyListOpen(!myListOpen);
  };

  const handleChange = (value) => {
    setState({ value });
  };

  // eslint-disable-next-line no-use-before-define

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const searchChangeHanle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <BoardNav
        afterSearch={afterSearch}
        onMyList={onMyList}
        setMyListOpen={setMyListOpen}
        myListOpen={myListOpen}
        authRegi={authRegi}
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

      <>
        <Route exact path="/board">
          <BoardMainContainer
            afterSearch={afterSearch}
            saveSearch={saveSearch}
            setMyListOpen={setMyListOpen}
            myListOpen={myListOpen}
            isLogin={isLogin}
            authRegi={authRegi}
          />
        </Route>
        <Route path="/board/write">
          <Editor
            handleChange={handleChange}
            state={state}
            setState={setState}
            title={titles}
            setTitle={setTitles}
          />
        </Route>
        <Route path="/board/edit">
          <WriteEdit
            setTitle={setTitle}
            onTitleChange={onTitleChange}
            handleChange={handleChange}
            title={title}
          />
        </Route>
      </>
    </>
  );
};

export default Board;
