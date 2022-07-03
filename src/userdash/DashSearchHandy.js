import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { GrUserWorker } from 'react-icons/gr';
import { MdWork } from 'react-icons/md';
import styled from 'styled-components';
import img from '../images/man.jpg';
import DashNav from './DashNav';
import SearchHeader from './SearchHeader';

const DashSearchHandy = () => {
  return (
    <Container>
      <DashNav />
      <DashComp>
        {/* <DashHeader /> */}
        <SearchHeader />
        <DashWrapper>
          <FirstCardHolder>
            <Card>
              <Image src={img} />
              <ClientDetails>
                <IconAndText>
                  <GrUserWorker fontSize="18px" backgroundColor="blue" />
                  <Text>
                    <b>Confidence Efem</b>
                  </Text>
                </IconAndText>
                <IconAndText>
                  <MdWork fontSize="18px" />
                  <Text>10 Jobs completed</Text>
                </IconAndText>
                <IconAndText>
                  <BiNetworkChart fontSize="18px" />
                  <Text>Electrical Engineerer</Text>
                </IconAndText>
                <IconAndText>
                  <GoLocation fontSize="18px" />
                  <Text>10 Jobs completed</Text>
                </IconAndText>
                <RatingAndButton>
                  <RatingHolder>
                    <AiFillStar color="#3ddabe" fontSize="20px" />
                    <AiFillStar color="#3ddabe" fontSize="20px" />
                    <AiFillStar color="#3ddabe" fontSize="20px" />
                    <AiFillStar color="#3ddabe" fontSize="20px" />
                  </RatingHolder>
                  <HireButton>Hire Me</HireButton>
                </RatingAndButton>
              </ClientDetails>
            </Card>
          </FirstCardHolder>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashSearchHandy;

const HireButton = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid #3ddabe;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    color: white;
    background: #3ddabe;
  }
`;
const RatingAndButton = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-between;
`;
const RatingHolder = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.div`
  margin-left: 20px;
  font-weight: 500;
  font-size: 16px;
  color: black;
`;
const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  color: #3ddabe;
`;
const ClientDetails = styled.div`
  margin-top: 5px;
`;
const Image = styled.img`
  width: 220px;
  height: 100%;
  object-fit: cover;
  margin-right: 30px;
`;
const Card = styled.div`
  width: 100%;
  height: 220px;
  background: white;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  margin: 10px 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const FirstCardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
`;
const DashWrapper = styled.div`
  width: 90%;
`;
const DashComp = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  background-color: #fafcff;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-end;

  min-height: 100vh;
  justify-content: space-between;
  height: 100%auto;
`;
