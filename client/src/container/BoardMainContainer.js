import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardMain from '../Components/board/BoardMain';
import { write, insert, like, readnum } from '../modules/board';
import NewBoard from '../Pages/NewBoard';

const BoardMainContainer = ({ udeleteB, data, setUdeletb, authRegi }) => {
  return (
    <>
      <BoardMain
        udeleteB={udeleteB}
        data={data}
        setUdeletb={setUdeletb}
        authRegi={authRegi}
      />
    </>
  );
};

export default BoardMainContainer;
