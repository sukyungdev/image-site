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

  return (
    <div>
      MainPage
      <Button>theme</Button>
      {imageReducer.success && <ImageGrid imageReducer={imageReducer} />}
    </div>
  );
};

const Button = styled.button`
  padding: 10px;
  color: ${(props) => props.theme.colors.link};
`;

// const Font = styled.p`
//   font-family: 'NanumSquareNeo';
//   font-size: 2em;
// `;

export default MainPage;
