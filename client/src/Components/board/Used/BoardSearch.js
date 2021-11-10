import React from 'react';

const BoardSearch = ({ onKeyPress, search, searchChangeHanle, onSubmit }) => {
  return (
    <div className="board-search">
      <input
        className="search-i"
        placeholder="게시물검색 제목+본문"
        onKeyPress={onKeyPress}
        value={search}
        onChange={searchChangeHanle}
      />
      <button className="search-b" onClick={onSubmit}>
        검색
      </button>
    </div>
  );
};

export default BoardSearch;
