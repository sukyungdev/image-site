export const DATA_FETCH_SUCCESS = 'DATA_SUCCESS';
export const DATA_FETCH_FAIL = 'DATA_FAIL';

// export type ImageType = DataObjectType[];
export type ImageType = ImageDataType[];
export type ImageDispatchType = dataFailDispatch | dataSuccessDispatch;
export interface ImageDataType {
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
  likes: number;
  user: {
    id: string;
    username: string;
    links: {
      self: string;
    };
    profile_image: {
      medium: string;
    };
  };
  exif?: {
    name: string;
  };
  views?: number;
  downloads?: number;
}

export interface dataFailDispatch {
  type: typeof DATA_FETCH_FAIL;
}

export interface dataSuccessDispatch {
  type: typeof DATA_FETCH_SUCCESS;
  payload: { total?: number; total_pages?: number; data: ImageDataType[] };
}
