import React from 'react'
import styled from 'styled-components'

function Info() {
  return (
    <Container>
      <ContentBox>
        <Content>
          <Title>Little Lemon</Title>
          <BranchName>Chicago</BranchName>
          <AdContent>
            Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
            Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
            Lorem ipsum dolor sit; amet consectetur adipisicing elit. Maxime labore esse provident voluptates; adipisci nemo iure dolorum culpa facilis. Enim quos explicabo at nulla!
          </AdContent>
        </Content>
        <AdImg>
          <Img src='/Images/restaurant chef B.jpg' alt='restaurant' />
        </AdImg>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  margin: 3rem 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
    gap: 0;
    margin: 0 3rem;
  }
`;

const Content = styled.div`
  width: 520px;
  height: 380px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const BranchName = styled.h3`
  font-size: 26px;
  margin-bottom: 26px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const AdContent = styled.p`
  width: 100%;
  height: 250px;
  overflow-y: scroll;
  max-height: auto;
  margin-bottom: 38px;

  @media (max-width: 768px) {
    font-size: 14px;
    height: 160px;
  }
`;

const AdImg = styled.div`
  width: 520px;
  height: 380px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const Img = styled.img`
  width: 520px;
  height: 380px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 1024px) {
    width: 600px;
`;

export default Info;