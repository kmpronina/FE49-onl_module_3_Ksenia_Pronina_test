import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  index: number;
  disabled?: boolean;
  variant: 'primary' | 'secondary' | 'disabled';
  setSelectedTab: (index: number) => void;
};

export const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  disabled,
  variant
}) => {
  return (
    <TabTitleWrapper>
      <TabTitleButton
        type="button"
        onClick={() => setSelectedTab(index)}
        disabled={disabled}
        $variant={variant}
      >
        {title}
      </TabTitleButton>
    </TabTitleWrapper>
  );
};

const TabTitleWrapper = styled.li`
  all: unset;
`;

const TabTitleButton = styled.button<{
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
