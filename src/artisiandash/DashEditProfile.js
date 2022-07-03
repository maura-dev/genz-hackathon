import React from 'react';

import DashNav from './DashNav';
import DashHeader from './DashHeader';
import styled from 'styled-components';
const DashEditProfile = () => {
  const [FirstName, setFirstName] = React.useState('');
  const [LastName, setLastName] = React.useState('');
  const [City, setCity] = React.useState('');
  const [State, setState] = React.useState('');
  const [Phone, setPone] = React.useState('');

  const onSubmitForm = async () => {
    console.log(FirstName, LastName, City, State, Phone);

    setFirstName('');
    setLastName('');
    setCity('');
    setState('');
    setPone('');
  };

  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <Form>
            <Title>Edit Profile</Title>
            <InputHolder>
              <Label>First Name</Label>
              <Input
                placeholder="John "
                value={FirstName}
                onChange={e => {
                  setFirstName(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Last Name</Label>
              <Input
                placeholder="Doe"
                value={LastName}
                onChange={e => {
                  setLastName(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>City</Label>
              <Input
                placeholder="Victoria Island"
                value={City}
                onChange={e => {
                  setCity(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>State</Label>
              <Input
                placeholder="Lagos"
                value={State}
                onChange={e => {
                  setState(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Phone</Label>
              <Input
                placeholder="+234 5509 4338"
                value={Phone}
                onChange={e => {
                  setPone(e.target.value);
                }}
              />
            </InputHolder>
            <Button
              onClick={() => {
                onSubmitForm();
              }}
            >
              Edit Profile
            </Button>
          </Form>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashEditProfile;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Button = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-transform: uppercase;
  font-size: 13px;
  background: #3ddabe;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 349ms;
  :hover {
    transform: scale(1.01);
  }
`;
const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  font-weight: 500;
  width: 95%;
  border: none;
  outline: none;
  background: rgba(61, 218, 190, 0.4);
  :focus {
    border: 2px solid #3ddabe;
  }
`;
const Label = styled.div`
  font-size: 14px;
  color: lightgray;
  width: 100%;
  margin-bottom: 5px;
  margin-left: 8px;
  text-align: left;
`;
const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 20px 40px;
  background-color: white;
`;
const DashWrapper = styled.div`
  width: 90%;

  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
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
