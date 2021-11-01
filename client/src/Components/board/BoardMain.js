import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import styled from 'styled-components';
import Editor from '../board/Editor';
import './BoardMain.css';
const BoardMain = () => {
  return (
    <div className="b-m-b">
      <div className="flex-warp">
        <div className="flexContainer">
          <div className="card-container">
            <div className="card">
              <div className="thumnail">
                <img alt=""></img>
              </div>

              <div className="card-2">제목:</div>

              <div className="card-c">
                <FiHeart />
                <span className="handc">3</span>
                <span className="handc-1">작성자:</span>
              </div>

              <div className="card-c">
                <BiCommentDetail /> <span className="handc">5</span>
                <span className="handc-1">조회수:</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMain;
