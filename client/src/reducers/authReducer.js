import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        // Check that payload is not empty
        isAuthenticated: !isEmpty(action.payload),
        // If the above passes then set user to payload
        user: action.payload
      };
    default:
      return state;
  }
};
