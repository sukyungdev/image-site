import React from 'react';
import { BsDownload, BsSuitHeartFill, BsX } from 'react-icons/bs';
import styled from 'styled-components';
import { ImageDataType } from '../redux/actions/ImageActionsTypes';

type EmptyObject = Record<string, never>;
interface Imodal {
  modalData: ImageDataType | EmptyObject;
  setModalOpen: Function;
  addFavorite: Function;
}

const ImgModal = ({ modalData, setModalOpen, addFavorite }: Imodal) => {
  const { created_at, alt_description, urls, links, likes, user } = modalData;
  return (
    <Container>
      <Close onClick={() => setModalOpen(false)}>
        <BsX />
      </Close>
      <ContentBox>
        <Header>
          <UserInfoBox>
            <UserImg src={user.profile_image.medium} alt="user-img" />
            <p>{user.username}</p>
          </UserInfoBox>
          <ButtonBox>
            <Button onClick={() => addFavorite}>
              <BsSuitHeartFill />
            </Button>
            <a href={links.download} target="_blank" rel="noopener noreferrer">
              <Button>
                <BsDownload />
              </Button>
            </a>
          </ButtonBox>
        </Header>
        <Img src={urls.regular} alt="img" />
        <Desc>{alt_description}</Desc>
        <ImgInfo>
          <p>{created_at.substring(0, 10)}</p>
          <p>{likes} likes</p>
        </ImgInfo>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 60%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = styled.button`
  font-size: 30px;
  color: #ffffff;
  position: absolute;
  top: 0.25em;
  left: 0.25em;
`;

const ContentBox = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 80%;
  height: auto;
  max-width: 800px;
  max-height: 700px;
  z-index: 999;
  border-radius: 7px;
  padding: 1.5em;
`;

const Header = styled.div`
  margin-bottom: 1em;
`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const UserImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
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

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: 800px;
  max-height: 500px;
  object-fit: contain;
  margin-bottom: 1em;
`;

const Desc = styled.p`
  text-align: center;
  margin-bottom: 1.5em;
`;

const ImgInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.8em;
`;

export default ImgModal;
