import React from 'react';
import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  error?: string;
};

export const Input: React.FC<Props> = ({
  labelText,
  error,
  type,
  ...restProps
}) => {
  return (
    <>
      <Label>
        <span> {labelText}</span>
        <InrutWrapper
          type={type || 'text'}
          {...restProps}
          borderColor={error ? 'red' : 'initial'}
        />
        <Error>{error}</Error>
      </Label>
    </>
  );
};
const Label = styled.label`
  width: 65%;
  margin: 10px 0;
`;
const InrutWrapper = styled.input<{ borderColor?: string }>`
  all: unset;
  width: 90%;
  border: 1px solid ${({ borderColor }) => borderColor || 'black'};
  border-radius: 2px;
  line-height: 2;
  padding: 5px;
  background: white;

  // &:focus {
  //   border: 1px solid white;
  // }
`;
const Error = styled.div``;
