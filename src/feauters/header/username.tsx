import React from 'react';
import styled from 'styled-components';
type Props = {
  children: string;
};

const Initials: React.FC<Props> = ({ children }) => {
  const initials = children
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
  return <InitialsWrapper>{initials}</InitialsWrapper>;
};
const InitialsWrapper = styled.span`
  color: white;
  font-size: 18px;
  background-color: #6495ed;
  padding: 5px 7px;
  border-radius: 2px;
`;

export const UserName: React.FC<Props> = ({ children }) => {
  return (
    <UsernameDiv>
      <Initials>{children}</Initials>
      <UserNameWrapper>{children}</UserNameWrapper>
    </UsernameDiv>
  );
};
const UserNameWrapper = styled.span`
  all: unset;
  color: white;
  font-size: 18px;
  background-color: #3457d5;
  justify-content: flex-end;
  padding: 0px 5px;
`;
const UsernameDiv = styled.div`
  display: flex;
  align-items: center;
`;
