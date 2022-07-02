import React from 'react';
import styled from 'styled-components';
// import img from '../images/man.jpg';
import img1 from '../images/map.jpg';
import {IoMdMail,IoIosCall} from "react-icons/io"
import {MdLocationOn} from "react-icons/md"

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHold>
          <Image src={img1} />
          <Over></Over>
        </ImageHold>
        <ContactMainCard>
          <CardHold>
            <Title>Contact Us</Title>
            <Line></Line>
            <InputHoldAndDetails>
              <InputHold>
                <Input placeholder="What your name" />
                <Input placeholder=" Email" />
                <Input placeholder="Number phone" />
                <Input placeholder="Message" />
                <ButtonAndText>
                  <Button>Submit</Button>
                  <Text>
                    Thank you for contacting us! You will get an answer soon
                  </Text>
                </ButtonAndText>
              </InputHold>
              <MiddleLine></MiddleLine>
              <Detail>
                <IconAndText>
                  <Icon />
                  <IconText>test@gmail.com</IconText>
                </IconAndText>
                <IconAndText>
                  <Icon1 />
                  <IconText>+234 901 2645</IconText>
                </IconAndText>
                <IconAndText>
                  <Icon2 />
                  <IconText>22 Ahmadu Bello Road, Victoria Island, Lagos, Nigeria</IconText>
                </IconAndText>
              </Detail>
            </InputHoldAndDetails>
          </CardHold>
        </ContactMainCard>
      </Wrapper>
    </Container>
  );
};

export default Contact;

const IconText = styled.div`
  font-size: 14px;
  font-weight: 450;
`;
const Button = styled.div`
  /* margin-top: 10px; */
  padding: 15px 30px;
  border-radius: 40px;
  background: #3ddabe;
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
const ButtonAndText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const Text = styled.div`
  width: 140px;
  font-size: 9px;
  color: #3ddabe;
`;
const Icon1 = styled(IoIosCall)`
  font-size: 30px;
  margin-right: 30px;
  color: #3ddabe;
`;
const Icon2 = styled(MdLocationOn)`
  font-size: 30px;
  margin-right: 30px;
  color: #3ddabe;
`;
const Icon = styled(IoMdMail)`
  font-size: 30px;
  margin-right: 30px;
  color: #3ddabe;
`;
const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px ;
  margin-top: 5px ;
`;
const Detail = styled.div``;
const Input = styled.input`
  width: 300px;
  height: 45px;
  margin: 8px 0;
  outline: none;
  border: none;
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  font-size: 13px;
  ::placeholder {
    font-family: poppins;
    color: black;
  }
`;
const MiddleLine = styled.div`
  margin: 0 30px;
  width: 5px;
  height: 90%;
  background-color: gray;
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputHoldAndDetails = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  height: 100%;
  /* flex-direction:row; */
`;
const CardHold = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`;
const Line = styled.div`
  width: 50px;
  height: 4px;
  background-color: #3ddabe;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const ContactMainCard = styled.div`
  display: flex;
  width: 65%;
  justify-content: center;
`;
const Over = styled.div`
  position: absolute;
  background-color: #3ddabe;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* margin-right: 30px; */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageHold = styled.div`
  width: 37%;
  height: 100%;
  background-color: red;
  position: relative;
  /* top: 0; */
  margin-right: 30px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 84vh; */
  height: 85vh;
  // font-family: poppins;
  /* margin-top: 30px; */
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;

  flex-direction: row;
  background: #eee;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
`;
