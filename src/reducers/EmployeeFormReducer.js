import {
  EMPLOYEE_CREATED,
  EMPLOYEE_UPDATED,
  EMPLOYEE_FROM_UPDATE
} from "../constants/";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATED:
    case EMPLOYEE_UPDATED:
      return INITIAL_STATE;
    case EMPLOYEE_FROM_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    default:
      return state;
  }
};
