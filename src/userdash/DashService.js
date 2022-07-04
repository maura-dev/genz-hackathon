import React from 'react';
import img1 from '../images/wed1.webp';
import img3 from '../images/wed3.jpg';
import img7 from '../images/wed8.jfif';
import img8 from '../images/mech.jpg';
import img9 from '../images/painter.webp';
import DashNav from './DashNav';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
const DashService = () => {
  const navigate = useNavigate();

  // const searchSkillFunction = async () => {
  //   navigate(`/dash/allskill`);
  // };

  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashWrapper>
          <SearchComp>
            <Input placeholder="Search Input" />
            <Button1>
              <BiSearch />
            </Button1>
          </SearchComp>
          <CardHolder>
            <Card
              onClick={() => {
                // searchSkillFunction();
                navigate(`/dash/allskill/engineerer`);
              }}
            >
              <Image src={img7} />
              <CardWrapper>
                <Title>Electrical Engineerer</Title>
                <Desc>
                  Get All your Home applicances at your comfort and at no cost.
                </Desc>
                <Button>Hire An Engineerer</Button>
              </CardWrapper>
            </Card>
            <Card
              onClick={() => {
                // searchSkillFunction();
                navigate(`/dash/allskill/plumber`);
              }}
            >
              <Image src={img1} />
              <CardWrapper>
                <Title>Plumber</Title>
                <Desc>Your pipe got bust? We are here to help you</Desc>
                <Button>Hire A Plumber</Button>
              </CardWrapper>
            </Card>
            <Card
              onClick={() => {
                // searchSkillFunction();
                navigate(`/dash/allskill/carpentar`);
              }}
            >
              <Image src={img3} />
              <CardWrapper>
                <Title>Carpentar</Title>
                <Desc>
                  We are here to fix and create beautiful funitures just for you
                </Desc>
                <Button>Hire A Carpentar</Button>
              </CardWrapper>
            </Card>
            <Card
              onClick={() => {
                // searchSkillFunction();
                navigate(`/dash/allskill/mechanic`);
              }}
            >
              <Image src={img8} />
              <CardWrapper>
                <Title>Mechanic</Title>
                <Desc>Your car broke down? We are a click away from you</Desc>
                <Button>Hire A Mechanic</Button>
              </CardWrapper>
            </Card>

            <Card
              onClick={() => {
                // searchSkillFunction();
                navigate(`/dash/allskill/painter`);
              }}
            >
              <Image src={img9} />
              <CardWrapper>
                <Title>Painter</Title>
                <Desc>
                  Let's transform your home to be heaven through painting
                </Desc>
                <Button>Hire A Painter</Button>
              </CardWrapper>
            </Card>
          </CardHolder>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashService;

const Button1 = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: white;
  background: #3ddabe;
`;
const Input = styled.input`
  padding: 6px 14px;
  display: flex;
  flex: 1;
  outline: none;
  color: white;
  border: none;
  background: none;
  font-size: 14px;
`;

const SearchComp = styled.div`
  display: flex;
  opacity: 0;
  width: 300px;
  height: 40px;
  color: white;
  background: rgba(61, 218, 190, 0.4);
`;

const Button = styled.div`
  font-size: 11px;
  width: 130px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #3ddabe;
  /* text-transform: uppercase; */
  color: white;
  font-weight: 500;
  display: flex;
`;
const Desc = styled.div`
  font-size: 13px;
  font-weight: 450;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  /* text-transform: uppercase; */
  margin: 7px 0;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 140px;
`;
const Card = styled.div`
  width: 240px;
  height: 280px;
  display: flex;
  margin: 10px;
  overflow: hidden;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`;
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const DashWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
  align-items: center;
`;
const DashComp = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  align-items: center;
  background-color: #fafcff;
  flex-direction: column;
  /* background: blue; */
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  justify-content: space-between;
  height: 100%auto;
  /* background: red; */
`;
