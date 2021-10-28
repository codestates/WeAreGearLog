import React from 'react';

const ReadPost = ({ list, IdSave }) => {
  console.log('@@@@123', IdSave);
  console.log('@@@@', list[IdSave].write);
  return (
    <div>
      <div>{list[IdSave].write}</div>
    </div>
  );
};

export default ReadPost;
