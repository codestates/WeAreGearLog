import React from 'react';
import Pagination from '../Pagination';
const AfterSearch = ({ searchAfter, postsPerPage, paginate }) => {
  return (
    <div>
      <div id="box">
        <div className="b-m-b1">
          {searchAfter}
          <div className="b-footer">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={searchAfter.length}
              paginate={paginate}
            />
          </div>
          <div className="b-pad"></div>
        </div>
      </div>
    </div>
  );
};

export default AfterSearch;
