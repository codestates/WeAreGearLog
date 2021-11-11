import React from 'react';
import Pagination from './Pagination';
const AfterSearch = ({ searchAfter, postsPerPage, paginate }) => {
  return (
    <div>
      <div id="used-box">
        <div className="used-wrap">
          {searchAfter}
          <div className="b-footer">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={searchAfter.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterSearch;

// <div className="used-card">
// <div className="img-box">
//   <img width="100vh" className="used-img" alt="" src={el.img}></img>
// </div>
// <div className="used-content">
//   <div onClick={() => ReqRead(el.id)} className="used-title1">
//     {el.title}
//     <em className="ems">[{el.comment}]</em>
//   </div>
//   <div className="used-title2">
//     <div className="used-user">{el.username}</div>
//     <div className="used-user">{timeStamp}</div>
//   </div>
//   <div className="used-title2">
//     <div className="used-user">조회:{el.view}</div>
//     <div className="used-user">관심{el.like}</div>
//   </div>
// </div>
// </div>
