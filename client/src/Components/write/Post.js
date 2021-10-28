import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
`;
const AskModalBlock = styled.div`
  width: 500px;
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
`;

const Post = ({
  postconcat,
  openWrite,
  setOpenWrite,
  change,
  handleInputValue,
}) => {
  const onClick = () => {
    postconcat();
    setOpenWrite(!openWrite);
  };

  return (
    <Fullscreen>
      <AskModalBlock>
        <div className="write">
          <input
            onChange={handleInputValue('title')}
            value={change.title}
            name="title"
            placeholder="글제목"
            className="write-title"
          />
          <textarea
            onChange={handleInputValue('write')}
            value={change.write}
            name="write"
            placeholder="글쓰기"
            type="text"
            className="write-page"
          ></textarea>
        </div>
        <Button
          onClick={() => setOpenWrite(!openWrite)}
          className="write-button"
        >
          취소
        </Button>
        <Button onClick={onClick} className="write-button">
          올리기
        </Button>
      </AskModalBlock>
    </Fullscreen>
  );
};

export default Post;

//글쓰기 버튼이 나온다면 모달창으로 띄워준다
//글쓰기 버튼이 나온다면 콘캣으로 붙여준다 게시물에는 좋아요 타이틀 날짜 유
