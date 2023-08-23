import React from 'react';
import styled from 'styled-components';
type Props = {
  children: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper type="button" disabled={disabled} onClick={() => onClick()}>
      {children}
    </ButtonWrapper>
  );
};
// преобразйется в React.createElement

const ButtonWrapper = styled.button`
  all: unset;
  cursor: pointer;
  border: 1p solid white;
  background: coral;
  border-radius: 4px;
  padding: 10px 15px;
  color: black;

  &:disabled {
    cursor: none;
    opacity: 0.5;
    background-color: gray;
  }
`;
