import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import axios from 'axios';
import moment from 'moment';
import laudry from '../images/plumber.png';
import { Avatar } from '@chakra-ui/avatar';
import hired from '../images/hired.png';
import clientimg from '../images/client.png';

const ArtisianOverview = ({ user }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const config = {
      headers: {
        authorization: `Bearer ${user?.jwtToken}`,
      },
    };
    const res = await axios.get(
      `https://artikapp.herokuapp.com/api/v1/booking/artisan/get-bookings`,
      config
    );
    // console.log(res);
    setData(res?.data);
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  });
  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader user={user} />
        <DashWrapper>
          <FirstCardHolder>
            <Card>
              <CardWrapper>
                <TextContents>
                  <TotalText>Complete Profile</TotalText>
                  <Amoutn>50%</Amoutn>
                  <Join>
                    <span>Joined:</span>
                    {moment(user?.user?.createdAt).fromNow()}
                  </Join>
                </TextContents>
                <IconShow src={laudry} />
              </CardWrapper>
            </Card>
            <Card>
              <CardWrapper>
                <TextContents>
                  <TotalText>Total Clients Worked With</TotalText>
                  <Amoutn>{data?.length}</Amoutn>
                  <Join>
                    <span>Recent:</span>{' '}
                    {moment(data[data?.length - 1]?.createdAt).fromNow()}
                  </Join>
                </TextContents>
                <IconShow src={clientimg} />
              </CardWrapper>
            </Card>
            <Card>
              <CardWrapper>
                <TextContents>
                  <TotalText>Total Bookings</TotalText>
                  <Amoutn>{data?.length}</Amoutn>
                  <Join>
                    <span>Recent:</span>{' '}
                    {moment(data[data?.length - 1]?.createdAt).fromNow()}
                  </Join>
                </TextContents>
                <IconShow src={hired} />
              </CardWrapper>
            </Card>
          </FirstCardHolder>
          <SecondCardHolder>
            <SecondTitle>Recent Jobs</SecondTitle>
            {data?.map((props, i) =>
              i < 2 ? (
                <SecondCard>
                  <Avatar
                    size="md"
                    name={`${props?.client?.firstName} ${props?.client?.lastName}`}
                    mr={1}
                    ml={5}
                  />
                  <ClientName>{props?.clientName}</ClientName>
                  <ProjectName>{props?.detail}</ProjectName>
                  <HiredDate>
                    Hired: <span>{moment(props?.createdAt).fromNow()}</span>
                  </HiredDate>
                  <HiredDate>
                    Address: <span>{props.clientAddress}</span>
                  </HiredDate>
                  <Amount>${props?.budgetCost}</Amount>
                  {props?.isAccepted ? null : (
                    <PendingButton>Approve</PendingButton>
                  )}
                </SecondCard>
              ) : null
            )}
          </SecondCardHolder>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default ArtisianOverview;

const SecondTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 97%;
  color: #3ddabe;
  display: flex;
  justify-content: flex-start;
`;

const PendingButton = styled.div`
  padding: 10px 15px;
  border-radius: 30px;
  background: red;
  font-size: 12px;
  color: white;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }
`;
const HiredDate = styled.div`
  display: flex;
  margin-right: 30px;
  font-size: 13px;
  font-weight: 600;
`;
const Amount = styled.div`
  display: flex;
  margin-right: 20px;
  font-weight: 600;
  color: red;
`;
const ProjectName = styled.div`
  font-weight: 600;
  /* margin-left: 10px; */
  color: #3ddabe;
  display: flex;
  font-size: 14px;
  margin: 0 40px;
  /* flex: 2; */
`;
const ClientName = styled.div`
  font-weight: 600;
  margin-left: 10px;
  font-size: 14px;
  display: flex;
  /* flex: 1; */
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
const SecondCardHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;

  margin-top: 40px;
`;
const Join = styled.div`
  font-size: 12px;
  color: gray;
`;
const Amoutn = styled.div`
  font-weight: 700;
  margin: 10px 0;
  color: red;
  font-size: 25px;
`;
const TotalText = styled.div`
  font-size: 13px;
  color: gray;
  color: #3ddabe;
  font-weight: 600;
`;
const IconShow = styled.img`
  width: 60px;
  height: 60px;
  /* border-radius: 50%; */
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: lightgray; */
`;
const TextContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const CardWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Card = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const FirstCardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 40px;
`;
const DashWrapper = styled.div`
  width: 92%;
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
