import React from 'react';

import DashNav from './DashNav';
import DashHeader from './DashHeader';
import styled from 'styled-components';
const DashService = () => {
  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>Services Page</DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashService;

const DashWrapper = styled.div`
  width: 90%;
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
