import React, { useState } from 'react';
import BoardMain from '../Components/board/BoardMain';
import BoardNav from '../Components/board/BoardNav';
import Editor from '../Components/board/Editor';
import { Route } from 'react-router-dom';
const Board = ({ authRegi }) => {
  const [write, setWrite] = useState(false);
  return (
    <>
      <BoardNav authRegi={authRegi} />
      <>
        <Route exact path="/board">
          <BoardMain />
        </Route>

        <Route path="/board/write">
          <Editor />
        </Route>
      </>
    </>
  );
};

export default Board;
