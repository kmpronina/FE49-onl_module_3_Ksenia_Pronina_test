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
