import React from 'react';
import styled from 'styled-components';
import { InitialState } from '../redux/reducers/ImageReducer';
type ImageReducerType = InitialState | undefined;

const ImageGrid = ({ imageReducer }: { imageReducer: ImageReducerType }) => {
  // console.log(imageReducer);
  return (
    <div>
      <ImgGrid>
        {imageReducer &&
          imageReducer.images?.map((item) => (
            <Img src={item.urls.regular} alt="img" key={item.id} />
          ))}
      </ImgGrid>
    </div>
  );
};

const ImgGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(150px, auto);

  @media (min-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ImageGrid;
