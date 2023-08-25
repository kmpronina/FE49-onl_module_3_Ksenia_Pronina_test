import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string;
};

export const Title: React.FC<Props> = ({ children }) => {
  return <TitleWrap>{children}</TitleWrap>;
};

const TitleWrap = styled.h1`
  cursor: pointer;
  width: 25%;
  text-align: center;
  background: #dcdcdc;
  border-radius: 4px;
  padding: 10px 15px;
  color: black;
  font-size: 48px;
  font-width: 600;
`;
