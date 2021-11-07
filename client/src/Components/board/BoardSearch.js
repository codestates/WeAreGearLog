import React from 'react';
import './BoardMain.css';
const BoardSearch = ({ onKeyPress, search, searchChangeHanle, onSubmit }) => {
  return (
    <div className="board-search">
      <input
        onKeyPress={onKeyPress}
        value={search}
        onChange={searchChangeHanle}
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
};

export default BoardSearch;
