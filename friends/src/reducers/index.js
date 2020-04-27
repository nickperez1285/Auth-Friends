import {
  FETCH_SUCCESS,
  FETCH_START,
} from "../actions";

const initialState = {
  friends: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    default:
      return state;
  }
};

export default reducer;	