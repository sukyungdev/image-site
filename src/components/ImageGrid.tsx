import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { InitialState } from '../redux/reducers/ImageReducer';
import { RootReducerType } from '../redux/Store/Store';
import PaginationBox from './PaginationBox';

type ImageReducerType = InitialState | undefined;
interface Item {
  urls: { regular: string | undefined };
  id: React.Key | null | undefined;
}

const ImageGrid = ({ imageReducer }: { imageReducer: ImageReducerType }) => {
  const { total } = useSelector((state: RootReducerType) => state.ImageReducer);
  return (
    <div className="container">
      <ImgGrid>
        {imageReducer &&
          imageReducer.images?.map((item: Item) => (
            <Img src={item.urls.regular} alt="img" key={item.id} />
          ))}
      </ImgGrid>
      {total && <PaginationBox />}
    </div>
  );
};

const ImgGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(150px, auto);

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(250px, auto);
  }

  @media (min-width: 1140px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, auto);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ImageGrid;
