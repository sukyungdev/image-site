import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { InitialState } from '../redux/reducers/ImageReducer';
import { ImageDataType } from '../redux/actions/ImageActionsTypes';
import { RootReducerType } from '../redux/Store/Store';
import PaginationBox from './PaginationBox';
import { BsSuitHeartFill, BsDownload } from 'react-icons/bs';

type ImageReducerType = InitialState | undefined;
const ImageGrid = ({ imageReducer }: { imageReducer: ImageReducerType }) => {
  const { total } = useSelector((state: RootReducerType) => state.ImageReducer);

  const addFavorite = () => {
    alert('저장되었습니다!');
  };

  return (
    <div className="container">
      <Grid>
        {imageReducer &&
          imageReducer.images?.map((item: ImageDataType) => (
            <ImgBox>
              <ButtonBox>
                <Button onClick={addFavorite}>
                  <BsSuitHeartFill />
                </Button>
                <a href={item.links.download} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <BsDownload />
                  </Button>
                </a>
              </ButtonBox>

              <Img src={item.urls.regular} alt="img" key={item.id} />
            </ImgBox>
          ))}
      </Grid>
      {total && <PaginationBox />}
    </div>
  );
};

const Grid = styled.div`
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

const ImgBox = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  object-fit: cover;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  display: flex;
  gap: 0.5em;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  opacity: 0.7;
  background-color: ${(props) => props.theme.colors.background};

  &:hover {
    opacity: 1;
  }
`;

export default ImageGrid;
