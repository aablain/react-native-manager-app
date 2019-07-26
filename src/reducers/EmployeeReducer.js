import { EMPLOYEES_FETCH_SUCCESS } from "../constants/";

const INITAL_STATE = {};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
