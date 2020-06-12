const initialState = {
  smurfs: [],
  isFetching: false,
};

export const SmurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SMURFS_START":
      return {
        ...state,
        isFetching: true,
      };

    case "FETCH_SMURFS_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
