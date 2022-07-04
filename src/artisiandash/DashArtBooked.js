import React from // useState
'react';

import DashHeader from './DashHeader';
import styled from 'styled-components';
import img from '../images/man.jpg';
import ArtisianNav from './DashNav';
// import axios from 'axios';

const DashArtBooked = () => {
  // const [data,setData] = useState([])

  // const fetchData = async () => {
  //   const url = "http://artikapp.herokuapp.com"
  //   const res = await axios.get(`${url}/`)
  // }

  return (
    <Container>
      <ArtisianNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <Title>All booked Page</Title>
          <HoldAllBook>
            <SecondCard>
              <SecondImage src={img} />
              <ClientName>Confidence Efem</ClientName>
              <ProjectName>Fixing Electric Fan</ProjectName>
              <Amount>$5000</Amount>
            </SecondCard>
          </HoldAllBook>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashArtBooked;

const Amount = styled.div`
  display: flex;
  margin-right: 30px;
  font-weight: 600;
  color: red;
`;
const ProjectName = styled.div`
  font-weight: 600;
  margin-left: 10px;
  color: #3ddabe;
  display: flex;
  flex: 2;
`;
const ClientName = styled.div`
  font-weight: 600;
  margin-left: 10px;
  margin-right: 100px;
  display: flex;
  flex: 1;
`;
const SecondImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 15px;
`;

const SecondCard = styled.div`
  width: 87%;
  margin: 15px 0;
  display: flex;
  align-items: center;
  background: white;
  /* margin-left: 20px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 80px;
`;

const HoldAllBook = styled.div`
  width: 100%;
  display: flex;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0;
`;
const DashWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const DashComp = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  align-items: center;
  background-color: #fafcff;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  justify-content: space-between;
  height: 100%auto;
`;
