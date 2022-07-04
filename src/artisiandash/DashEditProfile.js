import React from 'react';

import DashNav from './DashNav';
import DashHeader from './DashHeader';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';
const ArtisianEditProfile = ({ user }) => {
  console.log(user?.jwtToken);

  const [FirstName, setFirstName] = React.useState(user?.user?.firstName || '');
  const [LastName, setLastName] = React.useState(user?.user?.lastName || '');
  const [Phone, setPhone] = React.useState(user?.user?.phone || '');
  const [skill, setSkill] = React.useState(user?.user?.skill || '');
  const [experience, setExperience] = React.useState(
    user?.user?.experience || ''
  );
  const [address, setAddress] = React.useState(
    user?.user?.workshopAddress || ''
  );

  const onSubmitForm = async () => {
    console.log(FirstName, LastName, skill, experience, address, Phone);

    try {
      const url = 'https://artikapp.herokuapp.com';
      const config = {
        headers: {
          authorization: `Bearer ${user?.jwtToken}`,
        },
      };
      const res = await axios.put(
        `${url}/api/v1/auth/update-user/artisan`,
        {
          firstName: FirstName,
          lastName: LastName,
          phone: Phone,
          skill: skill.toLowerCase(),
          experience: experience,
          workshopAddress: address,
        },
        config
      );
      if (res) {
        Swal.fire({
          icon: 'success',
          title: 'Artisian Profile Updated Successfully',
          // text: 'Input your Datas',
          timer: 2500,
          showConfirmButton: true,
        });
      }
      console.log(res.data);
      localStorage.setItem(
        'artikLoggedUser',
        JSON.stringify({ jwtToken: user?.jwtToken, user: res.data })
      );
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to edit profile',
        text: error.response.data,
        timer: 2500,
        showConfirmButton: true,
      });
    }
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
              <Label>Skill</Label>
              <Select
                placeholder="Choose your skill"
                value={skill}
                onChange={e => {
                  setSkill(e.target.value);
                }}
              >
                <option>Mechanic</option>
                <option>Painter</option>
                <option>Engineerer</option>
                <option>Plumber</option>
                <option>Carpentar</option>
              </Select>
            </InputHolder>
            <InputHolder>
              <Label> Experience</Label>
              <Input
                placeholder="2 Years"
                value={experience}
                onChange={e => {
                  setExperience(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Phone Number</Label>
              <Input
                placeholder="+2349122541558"
                value={Phone}
                onChange={e => {
                  setPhone(e.target.value);
                }}
              />
            </InputHolder>
            <InputHolder>
              <Label>Address</Label>
              <Input
                placeholder="11 Akin Alabi Street,Mushin, Lagos "
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                }}
              />
            </InputHolder>
            <Button
              onClick={() => {
                onSubmitForm();
              }}
            >
              Update Profile
            </Button>
          </Form>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default ArtisianEditProfile;

const Select = styled.select`
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
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
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
  margin-top: 10px;
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
  margin-bottom: 10px;
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
