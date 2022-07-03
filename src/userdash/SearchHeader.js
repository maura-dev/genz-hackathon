import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Name>All Engineerers</Name>
        <SearchComp>
          <Input placeholder="Search By Location" />
          <Button>
            <BiSearch />
          </Button>
        </SearchComp>
      </Wrapper>
    </Container>
  );
};

export default SearchHeader;

const Button = styled.div`
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
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
`;
