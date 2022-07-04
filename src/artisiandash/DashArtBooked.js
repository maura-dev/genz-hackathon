import React from 'react'; // useState

import DashHeader from './DashHeader';
import styled from 'styled-components';
import ArtisianNav from './DashNav';
import axios from 'axios';
import { Avatar } from '@chakra-ui/avatar';
import moment from 'moment';
// import axios from 'axios';

const DashArtBooked = ({ user }) => {
  const [data, setData] = React.useState([]);

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
  React.useEffect(() => {
    fetchData();
    console.log(data);
  });

  return (
    <Container>
      <ArtisianNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <Title>All booked Page</Title>
          <HoldAllBook>
            {data?.map(props => (
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
            ))}
          </HoldAllBook>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashArtBooked;

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
