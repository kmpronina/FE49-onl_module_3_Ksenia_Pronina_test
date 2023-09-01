import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { UserName } from './username';
type Props = {
  children: any;
};

export const Burger: React.FC<Props> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <BurgerWrapper type="button" onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? (
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/delete-sign.png"
            alt="close"
          />
        ) : (
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
            alt="menu"
          />
        )}
      </BurgerWrapper>
      <UsernamePop style={{ display: isOpened ? 'block' : 'none' }}>
        <UserName>{children}</UserName>
      </UsernamePop>
    </div>
  );
};

const BurgerWrapper = styled.button`
  position: relative;
  border: none;
  background: #3457d5;
  cursor: pointer;
  padding: 10px;
`;
const UsernamePop = styled.div`
  background-color: #3457d5;
  position: absolute;
  padding: 15px;
`;
// nClick={() => onClick()
