/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../redux/Store/Store';
import { FetchImageData } from '../redux/actions/ImageAction';
import { useDispatch } from 'react-redux';
import ImageGrid from '../components/ImageGrid';

const MainPage = () => {
  const imageReducer = useSelector((state: RootReducerType) => state.ImageReducer);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    dispatch(FetchImageData());
    setLoad(false);
  }, [dispatch]);

  return (
    <Container>
      {load === false && imageReducer.success ? (
        <ImageGrid imageReducer={imageReducer} />
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1em;

  @media (min-width: 368px) {
    padding: 2em;
  }
`;

export default MainPage;
