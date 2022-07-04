import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import axios from 'axios';
import moment from 'moment';

const DashOverview = ({ user, setUser }) => {
  // console.log(user);

  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const config = {
  //     headers: {
  //       authorization: `Bearer ${user?.jwtToken}`,
  //     },
  //   };
  //   const res = await axios.get(
  //     `http://artikapp.herokuapp.com/api/v1/job/all-job`,
  //     config
  //   );
  //   // console.log(res);
  //   setData(res?.data);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          authorization: `Bearer ${user?.jwtToken}`,
        },
      };
      const res = await axios.get(
        `https://artikapp.herokuapp.com/api/v1/job/all-job`,
        config
      );
      // console.log(res);
      setData(res.data);
    };
    fetchData();
    console.log(data);
  }, [data, user]);

  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader user={user} setUser={setUser} />
        <DashWrapper>
          <FirstCardHolder>
            <Card>
              <CardWrapper>
                <TextContents>
                  <TotalText>Complete Profile</TotalText>
                  <Amoutn>20</Amoutn>
                  <Join>
                    <span>Joined: </span>{' '}
                    {moment(user?.user?.createdAt).fromNow()}
                  </Join>
                </TextContents>
                <IconShow>25%</IconShow>
              </CardWrapper>
            </Card>
            <Card>
              <CardWrapper>
                <TextContents>
                  <TotalText>Total Jobs Posted</TotalText>
                  <Amoutn>{data?.length}</Amoutn>
                  <Join>
                    <span>Recent:</span>
                    {moment(data[data?.length - 1]?.createdAt).fromNow()}
                  </Join>
                </TextContents>
                <IconShow />
              </CardWrapper>
            </Card>
            <Card>
              <CardWrapper>
                <TextContents>
                  <TotalText>Total Hiring</TotalText>
                  <Amoutn>5</Amoutn>
                  <Join>
                    <span>Recent:</span>2days ago
                  </Join>
                </TextContents>
                <IconShow />
              </CardWrapper>
            </Card>
          </FirstCardHolder>
          <SecondCardHolder>
            <SecondTitle>Recent Posted Jobs</SecondTitle>
            {data?.map((props, i) =>
              i < 2 ? (
                <SecondCard>
                  {/* <SecondImage src={} /> */}
                  <ClientName>{props?.jobDetails}</ClientName>
                  <ProjectName>
                    Deadline:{moment(props?.deadline).fromNow()}
                  </ProjectName>
                  <Amount>${props.cost}</Amount>
                </SecondCard>
              ) : null
            )}
          </SecondCardHolder>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashOverview;

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
// const SecondImage = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   margin: 0 15px;
// `;
const SecondTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 97%;
  color: #3ddabe;
  display: flex;
  justify-content: flex-start;
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
const IconShow = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
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
  width: calc(100vw - 350px);
  min-height: calc(100vh - 80px);
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
  height: 100%;
`;
