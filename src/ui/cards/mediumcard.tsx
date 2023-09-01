import React from 'react';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  image?: string;
  text: string;
  date: string;
  lesson_num: string;
  title: string;
  author: string;
};

export const MediumCard: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString([], options);
  };
  const [count, setCount] = useState(0);
  return (
    <BigCardWrapper key={id}>
      <ImgWrapperDiv>
        <ImgWrapper alt="image" src={image}></ImgWrapper>
      </ImgWrapperDiv>
      <CardTextArea>
        <DateContainer>{formatDate(date)}</DateContainer>
        <TitleWrapper>{title}</TitleWrapper>
      </CardTextArea>

      <InteractArea>
        <LikesArea>
          <LikesButton type="button" onClick={() => setCount(count + 1)}>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/windows/32/facebook-like.png"
              alt="like"
            />
          </LikesButton>
          <LikesCounter>{count}</LikesCounter>
        </LikesArea>
        <InfoArea>
          <SaveButton>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png"
              alt="save"
            />
          </SaveButton>
          <InfoButton>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/more.png"
              alt="more"
            />
          </InfoButton>
        </InfoArea>
      </InteractArea>
    </BigCardWrapper>
  );
};

const BigCardWrapper = styled.div`
  background-color: lightgray;
  padding: 15px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  &:after {
    content: '';
    display: block;
    margin: auto;
    margin: 15px auto;
    width: 95%;
    height: 1px;
    background-color: gray;
  }
`;

const CardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin-bottom: 14px;
`;

const DateContainer = styled.span`
  color: gray;
  margin-bottom: 10px;
  width: 100%;
  font-size: 12px;
`;

const TitleWrapper = styled.h2`
  all: unset;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  margin-bottom: 10px;
  width: 100%;
`;

const ImgWrapperDiv = styled.div`
  max-width: 150px;
  max-height: 150px;
  aling-self: center;
`;

const ImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InteractArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const LikesArea = styled.div`
  display: flex;
  aling-items: center;
`;
const LikesButton = styled.button`
  all: unset;
  cursor: pointer;
`;
const LikesCounter = styled.span`
  margin-right: 15px;
`;

const InfoArea = styled.div`
  display: flex;
  aling-items: center;
  gap: 5px;
`;

const SaveButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const InfoButton = styled.button`
  all: unset;
  cursor: pointer;
`;
