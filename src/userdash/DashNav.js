import React from 'react';
import styled from 'styled-components';
import { MdDashboard } from 'react-icons/md';
import {
  AiFillFormatPainter,
  AiTwotoneEdit,
  AiTwotoneFile,
} from 'react-icons/ai';
import img from './gift.png';
import { NavLink } from 'react-router-dom';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const DashNav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo style={{ opacity: '0' }}>Artik</Logo>
        <NavHolder>
          <NavAndIcon to={`/dash/overview`}>
            <IconAndText>
              <MdDashboard />
              <Text>DashBoard</Text>
            </IconAndText>
            <Line to={`/dash/overview`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/postjob`}>
            <IconAndText>
              <AiFillFormatPainter />
              <Text>Post A Job</Text>
            </IconAndText>
            <Line to={`/dash/postjob`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/allservices`}>
            <IconAndText>
              <AiFillFormatPainter />
              <Text>Our Services</Text>
            </IconAndText>
            <Line to={`/dash/allservices`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/editprofile`}>
            <IconAndText>
              <AiTwotoneEdit />
              <Text>Edit Profile</Text>
            </IconAndText>
            <Line to={`/dash/editprofile`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/blog`}>
            <IconAndText>
              <AiTwotoneFile />
              <Text>View All Bookings</Text>
            </IconAndText>
            <Line to={`/dash/blog`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/alljobs`}>
            <IconAndText>
              <BsFillBriefcaseFill />
              <Text>View All Jobs</Text>
            </IconAndText>
            <Line to={`/dash/alljobs`}></Line>
          </NavAndIcon>
        </NavHolder>
        <Image src={img} />
      </Wrapper>
    </Container>
  );
};

export default DashNav;

const Image = styled.img`
  width: 200px;
  height: 170px;
  object-fit: cover;
  margin-top: 20px;
`;
const Line = styled(NavLink)`
  height: 40px;
  width: 5px;
  /* border: 2px solid ; */
  background-color: #3ddabe;
  display: none;
  &.active {
    display: block;
  }
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 30px;
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  /* color: lightgray; */
  font-size: 20px;
`;
const NavAndIcon = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  transition: all 350ms;
  transition: all 350ms;

  cursor: pointer;
  width: 100%;
  text-decoration: none;
  margin: 10px 0;
  align-items: center;
  height: 40px;
  color: lightgray;
  &.active {
    color: #3ddabe;
  }
`;
const NavHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;
const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 80px;
  font-size: 20px;
  align-items: center;

  /* background: #fafcff; */
`;
const Container = styled.div`
  width: 350px;
  background-color: white;
  display: flex;
  height: 100vh;
  padding-top: 50px;
  justify-content: flex-end;
  box-shadow: 1px 1px 1px lightgray;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
`;
