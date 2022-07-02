import React from 'react';
import styled from 'styled-components';
import img from "../images/main.png"

const HeroPage = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftWrapper>
            <LeftTitle>
               <span>Artik</span>
            </LeftTitle>
            <Details>
               That's what Artik is for. It helps you reach the nearst handy man in the nearest time.
               You don't have to wait too long which most times get stuff worst. Just few clicks and all your issues are solve

               <br/>
               <br/>
              
              Easy, Seamless and Comfortabe to use by every and anyone
            </Details>
            <ButtonHolder>
              <Button>SERVICES</Button>
              <Button1>ABOUT US</Button1>
            </ButtonHolder>
          </LeftWrapper>
        </Left>
        <Right>
          <Image src={img}/>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default HeroPage;
const Image = styled.img`
width: 470px;
height: 570px;
object-fit:contain;
position: absolute;
top: -70px;
left: 0px;
border-radius: 50%;
`

const Button1 = styled.div`
  font-size: 15px;
  color: gray;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 350ms;
  font-size: 12px;
  cursor: pointer;
`;
const Button = styled.div`
  margin: 0 10px;
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
  margin-right: 10px;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
`;
const Details = styled.div`
  margin: 20px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
`;
const LeftTitle = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 900;
  width: 100%;
  line-height: 50px;
  span {
    color: #3ddabe;
  }
`;
const LeftWrapper = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
const Right = styled.div`
width: 500px;
height: 500px;
border-radius: 50%;
background: #3ddabe;
position: relative;
top: 0;
`;
const Left = styled.div`
  width: 390px;
  height: auto;
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Wrapper = styled.div`
  width: 78%;
  display: flex;
  /* background: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background:red; */
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  /* justify-content: flex-end; */
  // font-family: poppins;
`;
