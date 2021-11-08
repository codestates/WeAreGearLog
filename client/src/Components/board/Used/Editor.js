import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit';
import '../Editor.css';

const Editor = ({
  onSubmit,
  state,
  handleChange,
  setState,
  titles,
  setTitles,
  onTitleChange,
}) => {
  return (
    <div className="write">
      <h1>게시물 작성</h1>

      <input
        value={titles}
        onChange={onTitleChange}
        className="inputz"
        placeholder="제목을 입력하세요"
      />
      <Edit state={state} handleChange={handleChange} />

      <Link to="/used/store">
        <button onClick={onSubmit} className="u-b-1">
          올리기
        </button>
      </Link>
      <Link to="/used/store">
        <button className="u-b-1">취소</button>
      </Link>
    </div>
  );
};

export default Editor;
