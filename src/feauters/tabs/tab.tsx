import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  children: any;
};

export const TabArea: React.FC<Props> = ({ children }) => {
  return <TabWrapper>{children}</TabWrapper>;
};

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
