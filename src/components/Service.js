import React from 'react';
import { AiFillCalendar, AiFillCreditCard, AiFillDatabase, AiFillFilter, AiFillGolden, AiFillHtml5, AiFillMediumCircle, AiFillMoneyCollect, AiFillProject, AiFillSlackCircle, AiFillTablet, AiFillVideoCamera } from 'react-icons/ai';
// import { GrInstall } from 'react-icons/gr';
import styled from 'styled-components';

const Service = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          Our <span>Services</span>
        </Heading>
        <Line></Line>
        <CardHolder>
          <Card>
            <Circle>
              <AiFillProject />
            </Circle>
            <Title>PROJECT DEVELOPMENT</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillCalendar />
            </Circle>
            <Title>FLOORING INSTALLATION</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillCreditCard />
            </Circle>
            <Title>WALL CONSTRUCTION</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillVideoCamera />
            </Circle>
            <Title>SITE SURVEYS</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillTablet />
            </Circle>
            <Title>PROFFESSIONAL PAINTINGS</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillMoneyCollect />
            </Circle>
            <Title>ELECTRICAL WORK</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillSlackCircle />
            </Circle>
            <Title>INTERIOR BUILD OUTS</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillHtml5 />
            </Circle>
            <Title>MILL WORK</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillDatabase />
            </Circle>
            <Title>LIGHTING INSTALLATION</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillFilter />
            </Circle>
            <Title>complete renovation</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillGolden />
            </Circle>
            <Title>shelving</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
          <Card>
            <Circle>
              <AiFillMediumCircle />
            </Circle>
            <Title>finishing carpentry</Title>
            <Desc>
              Software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
          </Card>
        </CardHolder>

        <Button>I NEED HELP</Button>
      </Wrapper>
    </Container>
  );
};

export default Service;

const Button = styled.div`
  margin-top: 30px;

  padding: 15px 30px;
  border-radius: 40px;
  border: 1px solid #3ddabe;
  color: #3ddabe;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 350ms;
  font-size: 12px;
  cursor: pointer;
  transition: all 550ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
    background: #3ddabe;
    color: white;
  }
`;
const Desc = styled.div`
  font-size: 12px;
  color: gray;
  text-align: center;
`;
const Title = styled.div`
  font-weight: 600;
  margin: 10px 0;
  text-transform: uppercase;
`;
// const Icon = styled.div``;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-clip: 1px solid #3ddabe;
  background: #3ddabe;
  font-size: 20px;
  color: white;
`;
const Card = styled.div`
  width: 230px;
  /* background: red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px;
`;
const CardHolder = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content:space-around;
`;
const Line = styled.div`
  /* border: 3px solid #3ddabe; */
  height: 5px;
  background-color: #3ddabe;
  width: 50px;
`;
const Heading = styled.div`
  display: flex;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 30px;

  span {
    color: #3ddabe;
    margin-left: 8px;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 84vh; */
  height:auto;
  padding:50px 0px;
  // font-family: poppins;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 30px;
`;
