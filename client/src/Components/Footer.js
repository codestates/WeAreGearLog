import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
  display: flex;
  left: 0px;
  bottom: 0px;
  height: 100px;
  width: 100%;
  background-color: purple;
  color: white;

  left: 0;

  bottom: 0;

  width: 100%;

  padding: 15px 0;
  padding-bottom: 30px;

  text-align: center;
`;

const Footer = () => {
  return (
    <Foot>
      <div>이영광</div>
      <div>이창윤</div>
      <div>황성현</div>
      <div>김동찬</div>
    </Foot>
  );
};

export default Footer;
