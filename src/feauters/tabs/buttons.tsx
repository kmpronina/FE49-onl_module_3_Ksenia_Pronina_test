import React from 'react';
import styled from 'styled-components';

type Props = {
  variant: 'primary' | 'secondary' | 'disabled';
  children: string;
  disabled?: string;
};
// onClick?: () => void;
export const Tab: React.FC<Props> = ({ variant, children }) => {
  return (
    <TabWrapper type="button" $variant={variant}>
      {children}
    </TabWrapper>
  );
};
// onClick={() => onClick()}
// преобразйется в React.createElement
const css = String.raw;
const TabWrapper = styled.button<{
  $variant: 'primary' | 'secondary' | 'disabled';
}>`
  all: unset;
  cursor: pointer;
  background: #6495ed;
  // border: 1px solid white;
  padding: 10px 15px;
  color: white;

  &:hover {
    color: #3457d5;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary': {
        return `
        border-bottom: 3px solid white`;
      }
      case 'disabled': {
        return `color: gray`;
      }
      default: {
        return ``;
      }
    }
  }}
`;
