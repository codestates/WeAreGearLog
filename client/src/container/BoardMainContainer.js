import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardMain from '../Components/board/BoardMain';
import { write, insert, like, readnum } from '../modules/board';

const BoardMainContainer = ({ authRegi }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.board);

  return <BoardMain authRegi={authRegi} />;
};

export default BoardMainContainer;
