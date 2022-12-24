import {
  DATA_FETCH_FAIL,
  DATA_FETCH_SUCCESS,
  ImageType,
  ImageDispatchType,
} from '../actions/ImageActionsTypes';
export interface InitialState {
  success: boolean;
  images?: ImageType;
}

const initialState: InitialState = {
  success: false,
};

const ImageReducer = (state = initialState, action: ImageDispatchType): InitialState => {
  switch (action.type) {
    case DATA_FETCH_FAIL:
      return {
        ...state,
        success: false,
      };

    case DATA_FETCH_SUCCESS:
      return {
        ...state,
        success: true,
        images: action.payload,
      };

    default:
      return state;
  }
};

export default ImageReducer;
