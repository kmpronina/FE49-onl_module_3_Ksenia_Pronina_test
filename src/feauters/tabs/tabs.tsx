import React from 'react';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { TabTitle } from './tab-title';

type Props = {
  children: ReactElement[];
};

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <TabsWrap>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            variant={'secondary'}
          />
        ))}
      </TabsWrap>
      {children[selectedTab]}
    </div>
  );
};

const TabsWrap = styled.li`
  display: flex;
  padding: 15px -15px;
  width: 100%;
  background-color: #6495ed;
  align-items: center;
`;
