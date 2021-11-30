import * as Actions from '../actions';

const initialState = {
  isMobile: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.CheckIsMobile:
      return  {...state, isMobile: action.values };
    default:
      return state;
  }
};
