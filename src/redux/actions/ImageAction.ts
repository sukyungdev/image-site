import axios from 'axios';
import { Dispatch } from 'redux';
import { ImageDispatchType, DATA_FETCH_SUCCESS, DATA_FETCH_FAIL } from './ImageActionsTypes';

const API_KEY = `Z3Ch5OhRaGeiYEiKBNz89bXGjWQoc1Z-30W-yYdrCOs`;
export const FetchImageData =
  (query?: string): any =>
  async (dispatch: Dispatch<ImageDispatchType>) => {
    // SameSite cookie
    document.cookie = 'safeCookie1=foo; SameSite=Lax';
    document.cookie = 'safeCookie2=foo';
    document.cookie = 'crossCookie=bar; SameSite=None; Secure';
    // data fetch
    try {
      let data = null;
      const res = axios.get(
        `${
          query
            ? `https://api.unsplash.com/search/photos/?query=${query}`
            : 'https://api.unsplash.com/photos/random'
        }`,
        {
          params: {
            client_id: API_KEY,
            count: 10,
            // crossDomain: true,
            // withCredentials: true,
          },
        }
      );
      // query의 유무에 따라서 data type이 다르다.
      if (query) {
        let { total, total_pages, results } = (await res).data;
        data = results;
        // console.log(total, total_pages, data);
        dispatch({
          type: DATA_FETCH_SUCCESS,
          payload: { data, total, total_pages },
        });
      } else {
        data = (await res).data;
        // console.log('쿼리가 없는 경우', data);
        dispatch({
          type: DATA_FETCH_SUCCESS,
          payload: { data },
        });
      }
    } catch (error) {
      dispatch({
        type: DATA_FETCH_FAIL,
      });
    }
  };
