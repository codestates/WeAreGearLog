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
  saveSearch,
  afterSearch,
}) => {
  return (
    <>
      <BoardMain
        afterSearch={afterSearch}
        saveSearch={saveSearch}
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
