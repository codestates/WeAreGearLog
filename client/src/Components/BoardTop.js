import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .search {
    margin-right: 50px;
  }
  .input {
    height: 30px;
    width: 300px;
  }
  .button {
    height: 30px;
  }
`;

const Topinlogo = styled.div`
  font-size: 50px;
  margin-left: 30px;
`;
const BoardTop = () => {
  return (
    <Top>
      <Topinlogo>GearLog</Topinlogo>

      <div className="search">
        <input className="input"></input>
        <button className="button">검색</button>
      </div>
    </Top>
  );
};

export default BoardTop;
