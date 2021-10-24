import React from 'react';

import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  background: gray;
  &:hover {
    background: gray;
    cursor: pointer;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: cyan;
      &:hover {
        background: cyan;
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
