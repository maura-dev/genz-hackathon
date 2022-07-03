import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const Testimonail = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <span>Testimonials</span>
        </Heading>
        <Line></Line>
        <CardHolder>
          <Card>
            <CardWrapper>
              <Title>Precious Artik</Title>
              <Detail>
                Faced with pointless or impossible questions, Zuckerberg
                maintained a sort of perpetually aggrieved countenance, looking
                more like the dog than the beater. Pichai tuned out, missing
                questions or offering obvious
              </Detail>
              <RatingIcon>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
              </RatingIcon>
            </CardWrapper>
          </Card>
          <Card>
            <CardWrapper>
              <Title>Maureen Artik</Title>
              <Detail>
                Faced with pointless or impossible questions, Zuckerberg
                maintained a sort of perpetually aggrieved countenance, looking
                more like the dog than the beater. Pichai tuned out, missing
                questions or offering obvious
              </Detail>
              <RatingIcon>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
              </RatingIcon>
            </CardWrapper>
          </Card>
          <Card>
            <CardWrapper>
              <Title>Omotayo Artik</Title>
              <Detail>
                Faced with pointless or impossible questions, Zuckerberg
                maintained a sort of perpetually aggrieved countenance, looking
                more like the dog than the beater. Pichai tuned out, missing
                questions or offering obvious
              </Detail>
              <RatingIcon>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
              </RatingIcon>
            </CardWrapper>
          </Card>
        </CardHolder>
        <Button>service</Button>
      </Wrapper>
    </Container>
  );
};

export default Testimonail;

const Icon = styled(AiFillStar)`
  margin-right: 3px;
  font-size: 18px;
`;
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
const RatingIcon = styled.div`
  display: flex;
  color: #3ddabe;
`;
const Detail = styled.div`
  font-size: 13px;
  margin: 15px 0;
  line-height: 23px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const CardWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Card = styled.div`
  margin: 10px;
  width: 30%;
  height: auto;
  padding-bottom:50px;
  // background: white;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const CardHolder = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
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
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:50px 0px;
  height: auto;
  // font-family: poppins;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  /* margin-top: 30px; */
`;
