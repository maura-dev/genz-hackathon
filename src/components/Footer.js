import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Footer;

const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #213c37; ;
`;
