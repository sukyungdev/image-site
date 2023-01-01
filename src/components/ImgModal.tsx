import React from 'react';
import { ImageDataType } from '../redux/actions/ImageActionsTypes';

type EmptyObject = Record<string, never>;
interface Imodal {
  modalData: ImageDataType | EmptyObject;
  setModalOpen: Function;
}

const ImgModal = ({ modalData, setModalOpen }: Imodal) => {
  return (
    <div>
      <p>{modalData.user.username}</p>
    </div>
  );
};

export default ImgModal;
