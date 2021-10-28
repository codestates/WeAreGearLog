import React, { useState } from 'react';
import './Board.css';
import Post from '../Components/write/Post';
import PostList from '../Components/write/PostList';
import Posts from '../Components/write/Posts';
import { Route } from 'react-router-dom';
import ReadPost from '../Components/write/ReadPost';
const Board = () => {
  const [openWrite, setOpenWrite] = useState(false);
  const [idid, setIdid] = useState(1);
  const [IdSave, setIdSave] = useState(0);
  const [change, setChange] = useState({
    title: '',
    write: '',
  });

  const ClickRead = (id) => {
    setIdSave(id - 1);
  };
  console.log('123123', IdSave);
  const [list, setList] = useState([]);

  const postconcat = () => {
    setIdid(idid + 1);
    setList([...list, { id: idid, title: change.title, write: change.write }]);
  };
  const handleInputValue = (key) => (e) => {
    setChange({ ...change, [key]: e.target.value });
  };
  console.log(list);
  return (
    <>
      <div className="board">
        <div className="board-list">
          <button
            className="write-button"
            onClick={() => {
              setOpenWrite(!openWrite);
            }}
          >
            글쓰기
          </button>
          <PostList />
          <Route path="/board/write/read">
            <ReadPost IdSave={IdSave} list={list} />
          </Route>
          <Posts ClickRead={ClickRead} list={list} />
        </div>
      </div>
      {openWrite ? (
        <Post
          postconcat={postconcat}
          change={change}
          setChange={setChange}
          handleInputValue={handleInputValue}
          setOpenWrite={setOpenWrite}
          openWrite={openWrite}
        />
      ) : null}
    </>
  );
};

export default Board;
