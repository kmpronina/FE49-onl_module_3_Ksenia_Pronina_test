import React from 'react';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
};
export const CadrsList: React.FC<Props> = ({ children }) => {
  return <CadrsListWrappper>{children}</CadrsListWrappper>;
};

const CadrsListWrappper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`;
