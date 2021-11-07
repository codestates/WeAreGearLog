import React from 'react';

import BoardMain from '../Components/board/BoardMain';

const BoardMainContainer = ({
  isLogin,
  udeleteB,
  data,
  setUdeletb,
  authRegi,
  onMyList,
  setMyListOpen,
  myListOpen,
}) => {
  return (
    <>
      <BoardMain
        onMyList={onMyList}
        setMyListOpen={setMyListOpen}
        myListOpen={myListOpen}
        isLogin={isLogin}
        udeleteB={udeleteB}
        data={data}
        setUdeletb={setUdeletb}
        authRegi={authRegi}
      />
    </>
  );
};

export default BoardMainContainer;
