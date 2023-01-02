import { useState } from 'react';
import styled from 'styled-components';
import { InitialState } from '../redux/reducers/ImageReducer';
import { ImageDataType } from '../redux/actions/ImageActionsTypes';
import { BsSuitHeartFill, BsDownload } from 'react-icons/bs';
import { message } from 'antd';
import ImgModal from './ImgModal';

type ImageReducerType = InitialState | undefined;

const ImageGrid = ({ imageReducer }: { imageReducer: ImageReducerType }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const ImgClick = (item: ImageDataType) => {
    setModalOpen(true);
    setModalData(item);
  };

  const addFavorite = () => {
    // alert('저장되었습니다!');
    message.info('사진이 저장되었습니다.');
  };

  return (
    <>
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
              <Img src={item.urls.regular} alt="img" key={item.id} onClick={() => ImgClick(item)} />
            </ImgBox>
          ))}
      </Grid>
      {modalOpen && (
        <ImgModal modalData={modalData} setModalOpen={setModalOpen} addFavorite={addFavorite} />
      )}
    </>
  );
};

const Grid = styled.div`
  margin-bottom: 1em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(150px, auto);

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(250px, auto);
  }
`;

const ImgBox = styled.div`
  position: relative;
  cursor: pointer;
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
