import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const Posts = ({ list, ClickRead }) => {
  const history = useHistory();
  const lists = list.map((el, idx) => {
    return (
      <div
        div
        onClick={() => {
          ClickRead(el.id);
        }}
        className="post-lists"
      >
        {el.title}
      </div>
    );
  });

  return (
    <div>
      <Link to="/board/write/read">{lists}</Link>
    </div>
  );
};

export default Posts;
