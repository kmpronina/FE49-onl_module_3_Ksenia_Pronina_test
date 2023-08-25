import React from 'react';
import './App.css';
import { Button } from './ui/button/button';
import { Title } from './feauters/title/title';
import { Header, Burger, UserName } from './feauters/header';
import { Tabs, Tab } from './feauters/tabs';
import { Input } from './ui/input/input';

export function App() {
  const name = 'Alex Young';
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
        <Tabs></Tabs>
      </div>
    </>
  );
}

// export function AddTitle() {
//   return <Title> Sign In </Title>;
// }
