import axios from 'axios';
import { Dispatch } from 'redux';
import { ImageDispatchType, DATA_FETCH_SUCCESS, DATA_FETCH_FAIL } from './ImageActionsTypes';

const API_KEY = `Z3Ch5OhRaGeiYEiKBNz89bXGjWQoc1Z-30W-yYdrCOs`;
export const FetchImageData = (): any => async (dispatch: Dispatch<ImageDispatchType>) => {
  try {
    const res = axios.get(`https://api.unsplash.com/photos/random?count=30&client_id=${API_KEY}`);
    const data = (await res).data;
    // console.log(data);
    dispatch({
      type: DATA_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATA_FETCH_FAIL,
    });
  }
};
