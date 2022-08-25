import React from 'react';
import styled from 'styled-components';
import img from '../images/wed.webp';
import img1 from '../images/wed1.webp';
import img2 from '../images/wed2.webp';
import img3 from '../images/wed3.jpg';
import img4 from '../images/wed5.jpg';
import img5 from '../images/wed6.jpg';
import img6 from '../images/wed7.jpg';
import img7 from '../images/wed8.jfif';
const HowWork = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          HOW <span>we work</span>
        </Heading>
        <Line />
        <CardHolder>
          <Image src={img} />
          <Image src={img1} />
          <Image src={img2} />
          <Image src={img3} />
          <Image src={img4} />
          <Image src={img5} />
          <Image src={img6} />
          <Image src={img7} />
          <Image src={img3} />
          <Image src={img5} />
        </CardHolder>
        <Button>Service</Button>
      </Wrapper>
    </Container>
  );
};

export default HowWork;

const Button = styled.div`
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
`;
const Image = styled.img`
  width: 210px;
  height: 160px;
  border-radius: 15px;
  object-fit: cover;
  margin: 5px;
`;
const CardHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
  @media screen and (max-width: 450px){
    
  }
`;
const Line = styled.div`
  width: 50px;
  border: 2px solid #3ddabe;
  background-color: #3ddabe;
  margin-top: 5px;
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
  /* height: 90%; */
  @media screen and (max-width: 800px){
    width: 90%;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding:50px 0px;
  // font-family: poppins;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
