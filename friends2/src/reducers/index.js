import {
  FETCH_SUCCESS,
  FETCH_START,
} from "../actions";

const initialState = {
  friends: [],
  isAuthenticated: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default reducer;	