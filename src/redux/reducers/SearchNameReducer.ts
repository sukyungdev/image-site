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

    default:
      return state;
  }
};

export default SearchNameReducer;
