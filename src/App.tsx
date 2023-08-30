import React from 'react';
import './App.css';
import { Title } from './feauters/title/title';
import { Header, Burger, UserName } from './feauters/header';
import { Tabs } from './feauters/tabs';
import { Tab } from './feauters/tabs/tab';
import { Input } from './ui/input/input';

export function App() {
  const name = 'Ksenia Pronina';
  return (
    <>
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
        <Tabs>
          <Tab title="All">All cards</Tab>
          <Tab title="Favorites">Only favorite cards</Tab>
          <Tab title="Popular">Only popular cards</Tab>
        </Tabs>
      </div>
    </>
  );
}

// export function AddTitle() {
//   return <Title> Sign In </Title>;
// }
