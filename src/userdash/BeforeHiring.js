import React from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

const BeforeHiring = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = React.useState('');
  const [cost, setCost] = React.useState();
  const [address, setAddress] = React.useState('');
  const [detail, setDetail] = React.useState('');

  const HireFunction = async () => {
    console.log(location, cost, address, detail);
    if (location === '' || cost === '' || address === '' || detail === '') {
      Swal.fire({
        icon: 'error',
        position: 'center',
        title: 'Data not found',
        text: 'Input your Datas',
        timer: 2500,
      });
    } else {
      try {
        const url = 'http://artikapp.herokuapp.com';
        const config = {
          authorization: `Bearer ${''}`,
        };
        const res = await axios.post(
          `${url}/api/v1/auth/book-artisan/${id}`,
          config,
          { location, budgetCost: cost, clientAddress: address, detail }
        );
        if (res) {
          Swal.fire({
            icon: 'success',
            title: 'Artisian booked successfully',
            // text: 'Input your Datas',
            timer: 2500,
            showConfirmButton: true,
          });
        }
        console.log(res);
      } catch (error) {}
    }

    setDetail('');
    setLocation('');
    setAddress('');
    setCost('');
  };

  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <Wrapper>
            <Cancel>
              <Circle
                onClick={() => {
                  navigate(`/allskill/engineer`);
                }}
              >
                <AiOutlineClose fontSize="17px" cursor="pointer" to="/" />
              </Circle>
            </Cancel>
            <Title>Input Details</Title>
            <InputWrapper>
              <Input
                placeholder="Lagos"
                value={location}
                onChange={e => {
                  setLocation(e.target.value);
                }}
                required
              />
              <Input
                placeholder="Budget Cost"
                type="number"
                value={cost}
                onChange={e => {
                  setCost(e.target.value);
                }}
                required
              />
              <Input
                placeholder="Home Address"
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                }}
                required
              />
              <Input1
                placeholder="Detail"
                value={detail}
                onChange={e => {
                  setDetail(e.target.value);
                }}
                required
              />
            </InputWrapper>
            <Button
              onClick={e => {
                HireFunction();
                e.preventDefault();
              }}
            >
              Hire Now
            </Button>
          </Wrapper>
        </DashWrapper>
      </DashComp>
    </Container>
    // <div>Hello</div>
  );
};

export default BeforeHiring;
const Button = styled.button`
  margin-top: 20px;
  background: #3ddabe;
  outline: none;
  border: none;
  width: 150px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }
`;
const Circle = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  background: red;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
`;
const Cancel = styled.div`
  width: 90%;
  margin-top: 14px;
  display: flex;
  /* background: red; */
  justify-content: flex-end;
`;
const Input1 = styled.textarea`
  margin: 14px 0;
  display: flex;
  padding: 10px;
  outline: none;
  width: 100%;
  border: 2px solid rgba(61, 218, 190, 0.4);
  border-radius: 4px;
  :focus {
    border: 2px solid #3ddabe;
  }
  ::placeholder {
    font-size: 14px;
  }
`;
const Input = styled.input`
  margin: 14px 0;
  display: flex;
  padding: 10px;
  outline: none;
  width: 100%;
  border: 2px solid rgba(61, 218, 190, 0.4);
  border-radius: 4px;
  :focus {
    border: 2px solid #3ddabe;
  }
  ::placeholder {
    font-size: 14px;
  }
`;
const InputWrapper = styled.div`
  width: 87%;
`;
const Title = styled.div`
  margin: 20px 0;
  font-weight: 600;
`;
const Wrapper = styled.form`
  width: 420px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
