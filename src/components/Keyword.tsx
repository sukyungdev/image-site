import React from 'react';
import styled from 'styled-components';

const Keyword = () => {
  const keywords = ['Travel', 'Nature', 'Animal', 'Fashion', 'Food', 'Business', 'Work', 'Health'];
  return (
    <Container>
      {keywords.map((item, index) => (
        <Button key={index}>{item}</Button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 1em auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid ${(props) => props.theme.colors.iconColor};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover {
    color: ${(props) => props.theme.colors.link};
    border-color: ${(props) => props.theme.colors.link};
  }
`;

export default Keyword;
