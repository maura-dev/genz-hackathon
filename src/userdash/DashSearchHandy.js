import axios from 'axios';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiNetworkChart, BiSearch } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { GrUserWorker } from 'react-icons/gr';
import { MdWork } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import img from '../images/man.jpg';
import DashNav from './DashNav';

const DashSearchHandy = ({ user }) => {
  //skill is coming from the all service page
  const { skill } = useParams();
  // console.log(user?.jwtToken);
  const mainSkill = skill.toLowerCase();
  const [search, setSearch] = React.useState('');
  // const [searchData, setSearchData] = React.useState('');

  const navigate = useNavigate();

  //   const [locationData, setLocationData] = React.useState([]);

  const [artisans, setArtisans] = React.useState([]);
  // React.useEffect(() => {
  //   fetch('https://artikapp.herokuapp.com/api/v1/artisan/all-artisan', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then(response => response.json())
  //     .then(res => setArtisans(res))
  //     .catch(err => console.log(err));
  // });
  React.useEffect(() => {
    const fetchData = async () => {
      const data = {
        skill: mainSkill
      }
      const config = {
        method:'GET',
        url:'https://artikapp.herokuapp.com/api/v1/artisan/find/skill',
        data: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${user?.jwtToken}`,
        },
      };
      const res = await axios(config)
      // console.log('hello', res);
      setArtisans(res.data);
    };
    fetchData();
  });

  //   const searchFunction = async () => {};

  // const onToggle = id => {
  //   navigate(`/beforehire/${'i'}`);
  // };

  // React.useEffect(() => {
  //   fetchData();
  //   console.log(allData);
  // });

  return (
    <Container>
      <DashNav />
      <DashComp>
        <Container1>
          <Wrapper1>
            <Name>All {skill.toLocaleUpperCase()}S</Name>
            <SearchComp>
              <Input
                placeholder="Search By Location"
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                }}
              />
              <Button2>
                <BiSearch />
              </Button2>
            </SearchComp>
          </Wrapper1>
        </Container1>
        <DashWrapper>
          <FirstCardHolder>
            {artisans?.map((props, i) =>
              i < 3 ? (
                <Card>
                  <Image src={img} />
                  <ClientDetails>
                    <IconAndText>
                      <GrUserWorker fontSize="18px" backgroundColor="blue" />
                      <Text>
                        <b>
                          {props?.firstName} {props?.lastName}
                        </b>
                      </Text>
                    </IconAndText>
                    <IconAndText>
                      <MdWork fontSize="18px" />
                      <Text>10 Jobs completed</Text>
                    </IconAndText>
                    <IconAndText>
                      <BiNetworkChart fontSize="18px" />
                      <Text>{props?.skill}</Text>
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
                      <HireButton
                        onClick={() => {
                          // onToggle('i');
                          navigate(`/beforehire/${props?._id}/${skill}`);
                        }}
                      >
                        Hire Me
                      </HireButton>
                    </RatingAndButton>
                  </ClientDetails>
                </Card>
              ) : null
            )}
          </FirstCardHolder>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashSearchHandy;

const Button2 = styled.div`
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
  color: black;
  border: none;
  background: none;
  font-size: 14px;
`;

const SearchComp = styled.div`
  display: flex;
  width: 300px;
  height: 40px;
  color: white;
  background: rgba(61, 218, 190, 0.4);
`;
const Name = styled.div`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
`;
const Wrapper1 = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Container1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
`;

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
  position: absolute;

  min-height: 100vh;
  justify-content: space-between;
  height: 100%auto;
`;
