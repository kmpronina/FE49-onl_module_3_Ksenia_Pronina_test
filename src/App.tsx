import React from 'react';
import { ReactElement, useState } from 'react';
import './App.css';
import { Title } from './feauters/title/title';
import { Header, Burger, UserName } from './feauters/header';
import { Tabs, TabArea, TabTitle } from './feauters/tabs';
import { Input } from './ui/input/input';
import { BigCard, MediumCard, CadrsList, SmallCard } from './ui/cards';

export function App() {
  const name = 'Ksenia Pronina';
  const tabItems = [
    { id: '1', title: 'All' },
    { id: '2', title: 'Favorite' },
    { id: '3', title: 'Popular' }
  ];

  const [activeTabId, setActiveTabId] = useState(tabItems[0].id);
  return (
    <>
      {/* HEADER AND MENU */}
      <div className="container">
        <Title> Sign In </Title>
      </div>
      <div className="container">
        <Header>
          <Burger>{name}</Burger>
          <Input labelText=" " placeholder="Welcome!" />
          <UserName>{name}</UserName>
        </Header>
      </div>
      <div className="container">
        <Tabs
          items={tabItems}
          activeId={activeTabId}
          onTabClick={setActiveTabId}
        />
        <CadrsList />
        {/* <TabArea title="All">
            <CadrsList></CadrsList>
          </TabArea> */}

        {/* <TabArea title="Favorite">Only favorite cards</TabArea>
          <TabArea title="Popular">Only popular cards</TabArea> */}
      </div>
    </>
  );
}

// export function AddTitle() {
//   return <Title> Sign In </Title>;
// }
