import axios from 'axios';
import { Dispatch } from 'redux';
import { ImageDispatchType, DATA_FETCH_SUCCESS, DATA_FETCH_FAIL } from './ImageActionsTypes';

export const FetchImageData =
  (query?: string, page?: any): any =>
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
            ? `https://api.unsplash.com/search/photos/?query=${query}${page ? `&page=${page}` : ''}`
            : 'https://api.unsplash.com/photos'
        }`,
        {
          params: {
            client_id: process.env.REACT_APP_API_KEY,
            count: 24,
            per_page: 24,
            // crossDomain: true,
            // withCredentials: true,
          },
        }
      );
      // query의 유무에 따라서 data type이 다르다.
      if (query) {
        let { total, total_pages, results: data } = (await res).data;
        // data = results;
        dispatch({
          type: DATA_FETCH_SUCCESS,
          payload: { data, total, total_pages },
        });
      } else {
        data = (await res).data;
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
