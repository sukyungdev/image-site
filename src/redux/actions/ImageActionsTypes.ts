export const DATA_FETCH_SUCCESS = 'DATA_SUCCESS';
export const DATA_FETCH_FAIL = 'DATA_FAIL';

export type ImageType = DataObjectType[];

interface DataObjectType {
  id: string;
  created_at: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    download: string;
  };
  user: {
    id: string;
    username: string;
  };
}

export interface dataFailDispatch {
  type: typeof DATA_FETCH_FAIL;
}

export interface dataSuccessDispatch {
  type: typeof DATA_FETCH_SUCCESS;
  payload: DataObjectType[];
}

export type ImageDispatchType = dataFailDispatch | dataSuccessDispatch;
