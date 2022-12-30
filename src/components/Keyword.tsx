import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FetchImageData } from '../redux/actions/ImageAction';

const Keyword = () => {
  const dispatch = useDispatch();
  const keywords = ['Travel', 'Nature', 'Animal', 'Fashion', 'Food', 'Business', 'Work', 'Health'];
  const keywordHandler = (item: string) => {
    dispatch(FetchImageData(item, 1));
    dispatch({ type: 'SEARCH_NAME', payload: { searchName: item, page: 1 } });
  };
  return (
    <Container>
      {keywords.map((item, index) => (
        <Button key={index} onClick={() => keywordHandler(item)}>
          {item}
        </Button>
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
