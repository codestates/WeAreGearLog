import React, { useState } from 'react';
import BoardMain from '../Components/board/BoardMain';
import BoardNav from '../Components/board/BoardNav';
import NewBoard from './NewBoard';
import { Route, Switch } from 'react-router-dom';
import BoardMainContainer from '../container/BoardMainContainer';
import Editor from '../Components/board/Editor';
import WriteEdit from './WriteEdit';
import { useSelector } from 'react-redux';
import FreeDoar from '../Components/board/FreeDoar';

const Board = ({ authRegi }) => {
  const data = useSelector((state) => state.board.read);

  const [titles, setTitles] = useState('');
  const [title, setTitle] = useState(data[0].title);
  const [state, setState] = useState({
    value: null,
  }); //글쓰기쪽
  const handleChange = (value) => {
    setState({ value });
  };

  // eslint-disable-next-line no-use-before-define

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <BoardNav authRegi={authRegi} />
      <FreeDoar />

      <>
        <Route exact path="/board">
          <BoardMainContainer authRegi={authRegi} />
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
