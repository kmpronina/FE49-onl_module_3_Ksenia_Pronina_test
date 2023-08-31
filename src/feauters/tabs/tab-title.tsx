import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  index: number;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  setSelectedTab: (index: number) => void;
};

export const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  disabled,
  variant
}) => {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <TabTitleWrapper>
      <TabTitleButton
        type="button"
        className={activeTab ? 'active' : 'inactive'}
        onClick={() => {
          setSelectedTab(index);
          setActiveTab(activeTab => !activeTab);
        }}
        disabled={disabled}
        $variant={activeTab ? 'primary' : 'secondary'}
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
  $variant: 'primary' | 'secondary';
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
      // case 'disabled': {
      //   return `color: gray`;
      // }
      default: {
        return ``;
      }
    }
  }}
`;
