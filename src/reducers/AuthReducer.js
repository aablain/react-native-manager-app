import {
  EMAIL_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
  LOGIN_USER_FAILED
} from "../constants/";

const INITIAL_STATE = {
  email: "",
  error: undefined,
  loading: false,
  password: "",
  user: null
};

export default (state = INITIAL_STATE, action) => {
  // console.log(`Action Triggered: ${action.type}`)
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        error: "",
        loading: true
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: "Failed to Authenticate User.",
        loading: false
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload.user
      };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
