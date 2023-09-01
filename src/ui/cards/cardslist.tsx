import React from 'react';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { BigCard } from './bigcard';
import { SmallCard } from './small-card';
import { MediumCard } from './mediumcard';

type Props = {
  children?: React.ReactNode;
};
export const CadrsList: React.FC<Props> = ({ children }) => {
  return (
    <CadrsListWrappper>
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
          id="3"
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
          id="4"
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
          id="5"
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
          id="6"
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
          id="7"
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
          id="8"
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
          id="9"
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
          id="10"
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
          id="11"
          image="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          text="Lorem bla bla bla"
          date="2012-12-12"
          lesson_num="14"
          title="Astronautus prep for new solar arrays on nearly seven-hour sracewalk"
          author="Leo Tolstoy"
        ></MediumCard>
      </div>
    </CadrsListWrappper>
  );
};

const CadrsListWrappper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  align-items: center;
`;
