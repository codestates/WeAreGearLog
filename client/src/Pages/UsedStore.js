import React from 'react';
import './UsedStore.css';

const UsedStore = () => {
  return (
    <div id="used-box">
      <div className="used-wrap">
        <div className="used-card">
          <div className="img-box">
            <img className="used-img" alt=""></img>
          </div>
          <div className="used-content">
            <div className="used-title1">품명</div>
            <div className="used-title2">
              <div className="used-user">QooQua</div>
              <div className="used-user">6일전</div>
            </div>
            <div className="used-title2">
              <div className="used-user">조회</div>
              <div className="used-user">관심</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedStore;
