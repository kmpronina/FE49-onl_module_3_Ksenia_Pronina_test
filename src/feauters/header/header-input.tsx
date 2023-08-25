import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
};

export const Input: React.FC<Props> = ({ children }) => {
  return <InputWrap>{children}</InputWrap>;
};
const InputWrap = styled.input`
  backgound: #72a0c1;
`;
