import React from 'react';
import './App.css';
import { Title } from './feauters/title/title';
import { Header, Burger, UserName } from './feauters/header';
import { Tabs, TabArea, TabTitle } from './feauters/tabs';
import { Input } from './ui/input/input';
import { BigCard, MediumCard, CadrsList, SmallCard } from './ui/cards';

export function App() {
  const name = 'Ksenia Pronina';
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
        <Tabs>
          <TabArea title="All">
            <CadrsList>
              <div className="BigCard1">
                <BigCard
                  id="1"
                  image="https://cdn.theatlantic.com/thumbor/FwVvCU7mD3zfbMEL_aHI160LO0g=/438x0:1563x1125/1080x1080/media/img/2022/12/0123_DIS_Koren_Overview_1/original.jpg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  date="2012-12-12"
                  lesson_num="12"
                  author="Jack London"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                ></BigCard>
              </div>
              <div className="smallCard1">
                <SmallCard
                  id="2"
                  image="https://lh3.googleusercontent.com/1fy2pB_1ET5bDRstIoL26fYwW-rYKYudA7MgrPncTv5KzNSh4w0-cEED4niK1e1ox7RzpOBEJjbTpYQ_RDeHEwm8QXbs5qadTQM=s750"
                  text="Lorem lore lorem"
                  date="2010-12-11"
                  lesson_num="15"
                  author="Anton Chekhov"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                ></SmallCard>
              </div>
              <div className="smallCard2">
                <SmallCard
                  id="4"
                  image="https://cdn.theatlantic.com/thumbor/FwVvCU7mD3zfbMEL_aHI160LO0g=/438x0:1563x1125/1080x1080/media/img/2022/12/0123_DIS_Koren_Overview_1/original.jpg"
                  text="Lorem lore lorem"
                  date="2010-12-11"
                  lesson_num="15"
                  author="Anton Chekhov"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                ></SmallCard>
              </div>
              <div className="smallCard3">
                <SmallCard
                  id="2"
                  image="https://lh3.googleusercontent.com/1fy2pB_1ET5bDRstIoL26fYwW-rYKYudA7MgrPncTv5KzNSh4w0-cEED4niK1e1ox7RzpOBEJjbTpYQ_RDeHEwm8QXbs5qadTQM=s750"
                  text="Lorem lore lorem"
                  date="2010-12-11"
                  lesson_num="15"
                  author="Anton Chekhov"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                ></SmallCard>
              </div>
              <div className="smallCard4">
                <SmallCard
                  id="4"
                  image="https://cdn.theatlantic.com/thumbor/FwVvCU7mD3zfbMEL_aHI160LO0g=/438x0:1563x1125/1080x1080/media/img/2022/12/0123_DIS_Koren_Overview_1/original.jpg"
                  text="Lorem lore lorem"
                  date="2010-12-11"
                  lesson_num="15"
                  author="Anton Chekhov"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                ></SmallCard>
              </div>
              <div className="smallCard5">
                <SmallCard
                  id="2"
                  image="https://lh3.googleusercontent.com/1fy2pB_1ET5bDRstIoL26fYwW-rYKYudA7MgrPncTv5KzNSh4w0-cEED4niK1e1ox7RzpOBEJjbTpYQ_RDeHEwm8QXbs5qadTQM=s750"
                  text="Lorem lore lorem"
                  date="2010-12-11"
                  lesson_num="15"
                  author="Anton Chekhov"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                ></SmallCard>
              </div>
              <div className="smallCard6">
                <SmallCard
                  id="4"
                  image="https://cdn.theatlantic.com/thumbor/FwVvCU7mD3zfbMEL_aHI160LO0g=/438x0:1563x1125/1080x1080/media/img/2022/12/0123_DIS_Koren_Overview_1/original.jpg"
                  text="Lorem lore lorem"
                  date="2010-12-11"
                  lesson_num="15"
                  author="Anton Chekhov"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                ></SmallCard>
              </div>
              <div className="mediumcard1">
                <MediumCard
                  id="3"
                  image="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  text="Lorem bla bla bla"
                  date="2012-12-12"
                  lesson_num="14"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                  author="Leo Tolstoy"
                ></MediumCard>
              </div>
              <div className="mediumcard2">
                <MediumCard
                  id="3"
                  image="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  text="Lorem bla bla bla"
                  date="2012-12-12"
                  lesson_num="14"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                  author="Leo Tolstoy"
                ></MediumCard>
              </div>
              <div className="mediumcard3">
                <MediumCard
                  id="3"
                  image="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  text="Lorem bla bla bla"
                  date="2012-12-12"
                  lesson_num="14"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                  author="Leo Tolstoy"
                ></MediumCard>
              </div>
              <div className="mediumcard4">
                <MediumCard
                  id="3"
                  image="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  text="Lorem bla bla bla"
                  date="2012-12-12"
                  lesson_num="14"
                  title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
                  author="Leo Tolstoy"
                ></MediumCard>
              </div>
            </CadrsList>
          </TabArea>
          <TabArea title="Favorite">Only favorite cards</TabArea>
          <TabArea title="Popular">Only popular cards</TabArea>
        </Tabs>
      </div>
    </>
  );
}

// export function AddTitle() {
//   return <Title> Sign In </Title>;
// }
