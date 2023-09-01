import React from 'react';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { TabTitle } from './tab-title';

// type Props = {
//   disabled?: boolean;
//   variant: 'primary' | 'secondary';
//   onClick: () => void;
//   children: any;
// };
// export const Tabs: React.FC = () => {
//   const [activeId, setActiveId] = useState('1');
//   return (
//     <div>
//       {['1', '2', '3'].map((id) => (
//         <TabsItem
//           key={id}
//           id={id}
//           opened={opened}
//           toggleOpened={(id) => setActiveId(id)}
//         />
//       ))}
//     </div>
//   );
// };

// const TabsItem: React.FC<{
//   id: string;
//   opened: boolean;
//   toggleOpened: (id: string) => void;
// }> = ({ opened, toggleOpened }) => {
//   return (
//     <button type="button" onClick={() => toggleOpened(id)}>
//       Click
//     </button>
//   );
// };

// type Props = {
//   children: ReactElement[];
// };

// export const Tabs: React.FC<Props> = ({ children }) => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   return (
//     <div>
//       <TabsWrap>
//         {children.map((item, index) => (
//           <TabTitle
//             key={index}
//             title={item.props.title}
//             index={index}
//             setSelectedTab={setSelectedTab}
//           />
//         ))}
//       </TabsWrap>
//       {children[selectedTab]}
//     </div>
//   );
// };

// const TabsWrap = styled.li`
//   display: flex;
//   padding: 15px -15px;
//   width: 100%;
//   background-color: #6495ed;
//   align-items: center;
// `;

type Item = {
  id: string;
  title: string;
};

type Props = {
  items: Item[];
  activeId: string;
  onTabClick: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({ items, activeId, onTabClick }) => {
  return (
    <TabPanelWrapper>
      {items.map(({ id, title }) => (
        <Tab
          key={id}
          id={id}
          title={title}
          isActive={id === activeId}
          onClick={onTabClick}
        />
      ))}
    </TabPanelWrapper>
  );
};

const TabPanelWrapper = styled.ul`
  all: unset;
  display: flex;
  background-color: lightgray;
  padding: 10px 15px;
  gap: 10px;
  margin-bottom: 5px;
`;

type TabProps = Item & {
  isActive: boolean;
  onClick: (id: string) => void;
};

const Tab: React.FC<TabProps> = ({ id, title, isActive, onClick }) => {
  return (
    <TabWrapper $isActive={isActive}>
      <TabButton type="button" onClick={() => onClick(id)}>
        {title}
      </TabButton>
    </TabWrapper>
  );
};

const TabWrapper = styled.li<{ $isActive: boolean }>`
  display: block;
  width: 10%;
  text-align: center;

  border-bottom: ${({ $isActive }) => {
    return $isActive && '2px solid gray';
  }};
`;

const TabButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #3457d5;
  }
`;
