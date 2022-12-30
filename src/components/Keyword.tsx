import React from 'react';
import styled from 'styled-components';

const Keyword = () => {
  const keywords = ['Travel', 'Nature', 'Animal', 'Fashion', 'Food', 'Business', 'Work', 'Health'];
  return (
    <Container>
      {keywords.map((item, index) => (
        <button key={index}>{item}</button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 1em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export default Keyword;
