import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function Advertise() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reserve');
  }

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
          <ReserveBtn onClick={handleClick}>Reserve Table</ReserveBtn>
        </Content>
        <AdImg><Img src='/Images/restauranfood.jpg' alt='restaurant'/></AdImg>
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
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
    align-items: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
    gap: 0;
  }
`;

const Content = styled.div`
  width: 520px;
  height: 380px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    gap: 10px;
  }
`;

const Title = styled.h2`
  font-size: 42px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const BranchName = styled.h3`
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const AdContent = styled.p`
  width: 100%;
  height: 140px;
  overflow-y: scroll;
  max-height: auto;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0; /* Color of the thumb */
    border-radius: 5px; /* Radius of the thumb */
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 140px;
  }
`;

const ReserveBtn = styled.button`
width: 100%;
  font-size: 24px;
  font-weight: 500;
  padding: 10px 80px;
  border-radius: 16px;
  background-color: #F4CE14;
  color: #495E57;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #495E57;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 60px;
  }
`;

const AdImg = styled.div`
  width: 520px;
  height: 380px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
    height: 200px;
  }
`;

const Img = styled.img`
  width: 520px;
  height: 380px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  @media (min-width: 1024px) {
    width: 600px;
    margin-right: 1rem;
  }
`;

export default Advertise;