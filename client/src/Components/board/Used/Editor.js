import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit';
import '../Editor.css';
import axios from 'axios';
import Used from '../../../Pages/Used';
const Editor = ({
  state,
  handleChange,
  setState,
  titles,
  setTitles,
  thumbnail,
  setThumbnail,
}) => {
  const onTitleChange = (e) => {
    setTitles(e.target.value);
  };

  const onSubmit = () => {
    let token = localStorage.getItem('token');

    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/post`,
        {
          category: 'used',
          title: titles,
          content: state.value,
          img: thumbnail,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        if (res.status === 201) {
          // eslint-disable-next-line no-restricted-globals
          // location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="write">
      <h1>게시물 작성</h1>

      <input
        value={titles}
        onChange={onTitleChange}
        className="inputz"
        placeholder="제목을 입력하세요"
      />
      <Edit
        state={state}
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        handleChange={handleChange}
      />

      <button onClick={onSubmit} className="u-b-1">
        올리기
      </button>

      <Link to="/used/store">
        <button className="u-b-1">취소</button>
      </Link>
    </div>
  );
};

export default Editor;
