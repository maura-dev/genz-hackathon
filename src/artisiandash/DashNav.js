import React from 'react';
import styled from 'styled-components';
import { MdDashboard } from 'react-icons/md';
import { AiTwotoneEdit, AiTwotoneFile } from 'react-icons/ai';
// import {MdLogout} from "react-icons/md"
import img from './gift.png';
import { NavLink } from 'react-router-dom';

const ArtisianNav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Artik</Logo>
        <NavHolder>
          <NavAndIcon to={`/art/overview`}>
            <IconAndText>
              <MdDashboard />
              <Text>DashBoard</Text>
            </IconAndText>
            <Line to={`/art/overview`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/art/editprofile`}>
            <IconAndText>
              <AiTwotoneEdit />
              <Text>Edit Profile</Text>
            </IconAndText>
            <Line to={`/dash/art/editprofile`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/art/booked`}>
            <IconAndText>
              <AiTwotoneFile />
              <Text>View Booked Page</Text>
            </IconAndText>
            <Line to={`/dash/art/booked`}></Line>
          </NavAndIcon>
          {/* <NavAndIcon to={`/`}>
            <IconAndText>
              <MdLogout />
              <Text>Logout</Text>
            </IconAndText>
            <Line to={`/`}></Line>
          </NavAndIcon> */}
        </NavHolder>
        <Image src={img} />
      </Wrapper>
    </Container>
  );
};

export default ArtisianNav;

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
  width: 400px;
  background-color: white;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  box-shadow: 1px 1px 1px lightgray;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
`;
