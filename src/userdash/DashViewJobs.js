import React, {
  useEffect,
  useState, // useState
} from 'react';

import DashNav from './DashNav';
import DashHeader from './DashHeader';
import styled from 'styled-components';
import axios from 'axios';
import { Avatar } from '@chakra-ui/avatar';
import moment from 'moment';
import { AiFillDelete } from 'react-icons/ai';
// import axios from 'axios';

const DashViewJobs = ({ user }) => {
  const [data, setData] = useState([]);

  const deleteJob = async id => {
    const config = {
      headers: {
        authorization: `Bearer ${user?.jwtToken}`,
      },
    };
    const url = 'https://artikapp.herokuapp.com';
    const res = await axios.delete(`${url}/api/v1/job/deleteJob/${id}`, config);
    if (res) {
      window.location.reload();
    }
  };

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
      setData(res.data);
    };
    fetchData();
    console.log(data);
  }, [data, user]);

  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <Title>All My Jobs</Title>
          <HoldAllBook>
            {data?.map(props => (
              <SecondCard>
                <Avatar
                  size="md"
                  name={`${user.user.firstName} ${user.user.lastName}`}
                  mr={1}
                  ml={5}
                />
                <ClientName>{props?.jobDetails}</ClientName>
                <ProjectName>
                  Deadline:{moment(props?.deadline).fromNow()}
                </ProjectName>
                <Amount>${props.cost}</Amount>
                <DeleteIcon
                  onClick={() => {
                    deleteJob(props._id);
                  }}
                >
                  <AiFillDelete fontSize="20px" />
                </DeleteIcon>
              </SecondCard>
            ))}
          </HoldAllBook>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashViewJobs;

const DeleteIcon = styled.div`
  cursor: pointer;
  margin-right: 20px;
  transition: all 450ms;
  :hover {
    color: red;
  }
`;
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
