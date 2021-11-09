import React from 'react';
import './UsedView.css';
const UsedView = () => {
  return (
    <div className="UsedBoard">
      <div className="used-view">
        <div className="used-read">
          <div className="used-title">asdf</div>
          <div className="used-info">
            <span className="used-info-list">QooQua</span>

            <span className="used-info-list">6일전</span>

            <span className="used-info-list">조회</span>

            <span className="used-info-list">관심 </span>
          </div>

          <div
            className="used-main-view"
            dangerouslySetInnerHTML={{
              __html: 'asdf',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UsedView;