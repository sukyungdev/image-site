/* eslint-disable react-hooks/exhaustive-deps */
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

const Container = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1em;
`;

export default MainPage;
