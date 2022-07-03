import React from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';

const DashOverview = () => {
  return (
    <Container>
      <DashNav />
      <DashComp>
        <DashHeader />
        <DashWrapper>
          <FirstCardHolder>
            <Card>
              <CardWrapper>
                <TextContents>
                  <TotalText>Total Application</TotalText>
                  <Amoutn>444444</Amoutn>
                  <Join>3days ago</Join>
                </TextContents>
                <IconShow />
              </CardWrapper>
            </Card>
          </FirstCardHolder>
        </DashWrapper>
      </DashComp>
    </Container>
  );
};

export default DashOverview;

const Join = styled.div`
font-size: 12px;
color: gray;
`;
const Amoutn = styled.div`
  font-weight: 600;
  margin: 15px 0;
  font-size: 22px;
`;                           
const TotalText = styled.div`
font-size: 13px;
color: gray;
`;
const IconShow = styled.div``;
const TextContents = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Card = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const FirstCardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
`;
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
