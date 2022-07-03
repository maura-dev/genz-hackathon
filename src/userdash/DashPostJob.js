import React from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import axios from 'axios';

const DashPostJob = () => {
  const [location, setLocation] = React.useState('');
  const [cost, setCost] = React.useState();
  const [deadline, setDeadline] = React.useState('');
  const [detail, setDetail] = React.useState('');

  const onSubmitform = async () => {
    console.log(location, cost, deadline, detail);
    setDetail('');
    setLocation('');
    setDeadline('');
    setDetail('');

    const config = {
      authorization: `Bearer ${''}`,
    };

    const url = 'http://artikapp.herokuapp.com/';
    const res = await axios.post(`${url}/api/v1/auth/post-job`, config, {
      jobDetails: detail,
      cost: cost,
      deadline: deadline,
      location: location,
    });
    console.log(res);
  };

  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <Form>
            <InputHolder>
              <Text>Location*:</Text>
              <Input
                placeholder="Lagos"
                value={location}
                onChange={e => {
                  setLocation(e.target.value);
                }}
                required
              />
            </InputHolder>
            <InputHolder>
              <Text>cost*:</Text>
              <Input
                placeholder="500"
                type="number"
                value={cost}
                onChange={e => {
                  setCost(e.target.value);
                }}
                required
              />
            </InputHolder>
            <InputHolder>
              <Text>Deadline*:</Text>
              <Input
                type="date"
                value={deadline}
                onChange={e => {
                  setDeadline(e.target.value);
                }}
                required
              />
            </InputHolder>
            <InputHolder1>
              <Text1>Detail*:</Text1>
              <TextArea
                placeholder="Enter Phone"
                value={detail}
                onChange={e => {
                  setDetail(e.target.value);
                }}
                required
              />
            </InputHolder1>
            <ButtonHolder>
              <Button
                onClick={e => {
                  e.preventDefault();
                  onSubmitform();
                }}
              >
                Post Job
              </Button>
            </ButtonHolder>
          </Form>
        </DashWrapper>
      </DashComp>
    </Container>
    // <div>Hello</div>
  );
};

export default DashPostJob;

const Button = styled.button`
  margin: 0 5px;
  border: none;
  outline: none;
  width: 170px;
  height: 50px;
  background: #3ddabe;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  border-radius: 3px;
  transition: all 349ms;
  :hover {
    transform: scale(1.01);
  }
  /* color: bleack; */
`;
const ButtonHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 10px;
  border: none;
  outline: none;
  background: rgba(61, 218, 190, 0.4);
  margin: 0 5px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 7px;
  :focus {
    border: 2px solid #3ddabe;
  }
  ::placeholder {
    ::placeholder {
      font-size: 12px;
    }
  }
`;

const Input = styled.input`
  /* width: 200px; */
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background: rgba(61, 218, 190, 0.4);
  /* margin: 0 5px; */
  font-size: 15px;
  font-weight: 500;
  border-radius: 7px;
  padding: 10px;
  :focus {
    border: 2px solid #3ddabe;
  }
  ::placeholder {
    font-size: 12px;
  }
`;

const Text1 = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  width: 150px;
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 450;
  /* margin-right: 20px; */
  width: 150px;
`;
const InputHolder1 = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  margin: 10px 0;
`;
const InputHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
const Form = styled.form`
  display: flex;
  width: 450px;
  flex-direction: column;
  /* background: red; */

  align-items: center;
`;
const DashWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const DashComp = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  align-items: center;
  background-color: #fafcff;
  flex-direction: column;
  /* height: calc(100vh - 100px); */
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  /* height: 100%auto; */
`;
