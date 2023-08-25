import React from 'react';
import styled from 'styled-components';
import { Tab } from './buttons';

type Props = {
  children?: any;
};

export const Tabs: React.FC<Props> = ({ children }) => {
  return (
    <TabsWrap>
      <Tab variant="primary">All</Tab>
      <Tab variant="secondary">My favorites</Tab>
      <Tab variant="disabled">Popular</Tab>
    </TabsWrap>
  );
};

const TabsWrap = styled.div`
  display: flex;
  padding: 15px -15px;
  width: 100%;
  background-color: #6495ed;
  align-items: center;
`;
