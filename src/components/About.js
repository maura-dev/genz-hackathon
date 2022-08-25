import React from 'react';
import styled from 'styled-components';
import img from '../images/wed.webp';
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          ABOUT <span>US</span>
        </Heading>
        <Line></Line>
        <ContentAndImageHolder>
          <ContentHolder>
            <Content>
              We are a firm that is deliberate to make our society a better place by making sure we get the right skilled person for any task.
              All our artisians are <b>Artikulated</b> and <b>Authentic</b>. 
              <br/>
              <br/>

              Got a Problem, You have Artik. Let's put you on the track to get the best hands for your painting, plumbering, House Wiring, 
              Cars Repair and any thing you can think of
            </Content>
            <Button>service</Button>
          </ContentHolder>
          <Image src={img} />
        </ContentAndImageHolder>
      </Wrapper>
    </Container>
  );
};

export default About;

const Button = styled.div`
  margin-top: 30px;
  background: #3ddabe;
  padding: 15px 30px;
  border-radius: 40px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 350ms;
  font-size: 12px;
  cursor: pointer;
  transition: all 550ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  @media screen and (max-width: 760px){
  margin-bottom: 30px;
  }
`;
const Content = styled.div`
  text-align: left;
  font-size: 15px;
  @media screen and (max-width: 760px){
 /* text-align: center; */
  }
`;
const Image = styled.img`
  height: 300px;
  display: flex;
  object-fit: cover;
  width: 35%;
  border-radius: 15px;
  @media screen and (max-width: 1202px){
    width: 320px;
  }
  @media screen and (max-width: 800px){
    margin-left: 20px;
  }
  @media screen and (max-width: 760px){
  width: 90%;
  height: 350px;
  }
  @media screen and (max-width: 400px){
  height: 320px;
  }
`;
const ContentHolder = styled.div`
  display: Flex;
  flex-direction: column;
  width: 55%;
  align-items: flex-start;
  @media screen and (max-width: 760px){
  width: 90%;
  align-items: center;
  }
  /* margin-top: 30px; */
`;
const ContentAndImageHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  margin-top: 40px;
  @media screen and (max-width: 760px){
   flex-wrap: wrap;
   justify-content: center;
  }
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
  justify-content: center;
  flex-direction: column;
  height: 80%;
  
  @media screen and (max-width: 1072px){
    width: 90%;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 30px;
  /* margin-bottom: 50px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
`;
