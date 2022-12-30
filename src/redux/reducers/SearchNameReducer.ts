const initialState = {
  searchName: '',
  page: 1,
};

const SearchNameReducer = (
  state = initialState,
  action: { type: string; payload: { searchName: string; page: number } }
) => {
  switch (action.type) {
    case 'SEARCH_NAME':
      return { ...state, searchName: action.payload.searchName, page: action.payload.page };
    case 'SEARCH_DELETE':
      return { ...state, searchName: '', page: 1 };
    default:
      return state;
  }
};

export default SearchNameReducer;
