import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../redux/Store/Store';
import { FetchImageData } from '../redux/actions/ImageAction';
import { useDispatch } from 'react-redux';
import ImageGrid from '../components/ImageGrid';
import Keyword from '../components/Keyword';
import PaginationBox from '../components/PaginationBox';

const MainPage = () => {
  const imageReducer = useSelector((state: RootReducerType) => state.ImageReducer);
  const { searchName } = useSelector((state: RootReducerType) => state.SearchNameReducer);
  const { total } = useSelector((state: RootReducerType) => state.ImageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchImageData());
  }, [dispatch]);

  console.log(searchName);
  return (
    <Container>
      <TitleBox>
        {searchName ? <Title>{searchName}</Title> : <Title>Beautiful Free Photos and Images</Title>}
      </TitleBox>
      <Keyword />
      {imageReducer.success && <ImageGrid imageReducer={imageReducer} />}
      {total && <PaginationBox />}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1em;

  @media (min-width: 368px) {
    padding: 1em 2em;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
  margin-bottom: 1em;
`;

const Title = styled.div`
  font-size: 1.5em;
`;
export default MainPage;
