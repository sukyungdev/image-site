import React from 'react';
import { InitialState } from '../redux/reducers/ImageReducer';
type ImageReducerType = InitialState | undefined;

const ImageGrid = ({ imageReducer }: { imageReducer: ImageReducerType }) => {
  console.log(imageReducer);
  return (
    <div>
      <div>
        {imageReducer &&
          imageReducer.images?.map((item) => (
            <div>
              <img src={item.urls.regular} alt="img" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGrid;
