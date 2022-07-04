import React, { useEffect, useState } from 'react';

import DashNav from './DashNav';
import DashHeader from './DashHeader';
import styled from 'styled-components';
import axios from 'axios';
import { Avatar } from '@chakra-ui/avatar';
import moment from 'moment';

const DashBlogPage = ({ user }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const config = {
      headers: {
        authorization: `Bearer ${user?.jwtToken}`,
      },
    };
    const res = await axios.get(
      `https://artikapp.herokuapp.com/api/v1/booking/user/get-bookings
      `,
      config
    );
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  });
  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <Title>All booked Page</Title>
          <HoldAllBook>
            {data?.map(props => (
              <SecondCard>
                <Avatar
                  size="md"
                  name={`${props?.artisan?.firstName} ${props?.artisan?.lastName}`}
                  mr={1}
                  ml={5}
                />
                <ClientName>
                  {props?.artisan?.firstName} {props?.artisan?.lastName}
                </ClientName>
                <ProjectName>{props?.detail}</ProjectName>
                <HiredDate>
                  Hired: <span>{moment(props?.createdAt).fromNow()}</span>
                </HiredDate>
                <Amount>${props?.budgetCost}</Amount>
                {props?.isAccepted ? (
                  <PendingButton
                    style={{ backgroundColor: '#3ddabe', color: 'black' }}
                  >
                    Hired
                  </PendingButton>
                ) : (
                  <PendingButton>Pending</PendingButton>
                )}
              </SecondCard>
            ))}
          </HoldAllBook>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashBlogPage;

const PendingButton = styled.div`
  padding: 10px 15px;
  border-radius: 30px;
  background: red;
  font-size: 12px;
  color: white;
`;
const HiredDate = styled.div`
  display: flex;
  margin-right: 70px;
  font-size: 13px;
  font-weight: 600;
`;
const Amount = styled.div`
  display: flex;
  margin-right: 80px;
  font-weight: 600;
  color: red;
`;
const ProjectName = styled.div`
  font-weight: 600;
  margin-left: 10px;
  color: #3ddabe;
  width: 170px;
  display: flex;
  margin: 0 80px;
  /* flex: 2; */
`;
const ClientName = styled.div`
  font-weight: 600;
  margin-left: 10px;

  display: flex;
  /* flex: 1; */
`;

const SecondCard = styled.div`
  width: 85%;
  margin: 15px 0;
  display: flex;
  align-items: center;
  background: white;
  /* margin-left: 20px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-height: 80px;
  height: 100%auto;
`;

const HoldAllBook = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
