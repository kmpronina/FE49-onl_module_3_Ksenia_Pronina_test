import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any;
};

export const Header: React.FC<Props> = ({ children }) => {
  return <HeaderWrap>{children}</HeaderWrap>;
};

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #3457d5;
  align-items: center;
  padding: 0 -15px;
`;
