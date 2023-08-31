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

export const BigCard: React.FC<Props> = ({
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
      <CardMainArea>
        <CardTextArea>
          <DateContainer>{formatDate(date)}</DateContainer>
          <TitleWrapper>{title}</TitleWrapper>
          <TextWrapper>{text}</TextWrapper>
        </CardTextArea>
        <ImgWrapperDiv>
          <ImgWrapper alt="image" src={image}></ImgWrapper>
        </ImgWrapperDiv>
      </CardMainArea>
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

  &:after {
    content: '';
    display: block;
    margin: auto;
    margin: 20px auto;
    width: 95%;
    height: 1px;
    background-color: gray;
  }
`;

const CardMainArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
`;

const CardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55%;
  margin-bottom: 15px;
`;

const DateContainer = styled.span`
  color: gray;
  margin-bottom: 10px;
  width: 100%;
  font-size: 12px;
`;

const TitleWrapper = styled.h2`
  all: unset;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextWrapper = styled.span`
  color: gray;
  font-size: 12px;
`;

const ImgWrapperDiv = styled.div`
  max-width: 150px;
  max-height: 150px;
`;

const ImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InteractArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  aling-items: center;
  padding: 0 20px;
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
  align-items: center;
`;

const SaveButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const InfoButton = styled.button`
  all: unset;
  cursor: pointer;
`;
