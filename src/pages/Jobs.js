import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const Jobs = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // const config = {
    //   headers: {
    //     authorization: ``,
    //   },
    // };
    const res = await axios.get(
      `http://artikapp.herokuapp.com/api/v1/job/all-jobs`
      // config
    );
    // console.log(res);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, [data]);

  return (
    <SecondCardHolder>
      <SecondTitle>Recent Posted Jobs</SecondTitle>
      {data?.map(props => (
        <SecondCard>
          {/* <SecondImage src={} /> */}
          <ClientName>{props?.jobDetails}</ClientName>
          <ProjectName>
            Deadline:{moment(props?.deadline).fromNow()}
          </ProjectName>
          <Amount>${props.cost}</Amount>
        </SecondCard>
      ))}
    </SecondCardHolder>
  );
};

export default Jobs;

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
