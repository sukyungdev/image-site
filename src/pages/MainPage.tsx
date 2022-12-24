import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../redux/Store/Store';
import { FetchImageData } from '../redux/actions/ImageAction';
import { useDispatch } from 'react-redux';
import ImageGrid from '../components/ImageGrid';

const MainPage = () => {
  const imageReducer = useSelector((state: RootReducerType) => state.ImageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchImageData());
  }, [dispatch]);

  return <Container>{imageReducer.success && <ImageGrid imageReducer={imageReducer} />}</Container>;
};

const Button = styled.button`
  padding: 10px;
  color: ${(props) => props.theme.colors.link};
`;

const Container = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1em;
  border: 1px solid black;
`;

// const Font = styled.p`
//   font-family: 'NanumSquareNeo';
//   font-size: 2em;
// `;

export default MainPage;
