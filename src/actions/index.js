import firebase from "firebase";
import { Actions as RouterActions } from "react-native-router-flux";

import {
  EMAIL_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED
} from "../constants/";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(err => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(err => loginUserFailed(dispatch, err));
      });
  };
};

const loginUserFailed = (dispatch, err) => {
  dispatch({ type: LOGIN_USER_FAILED, payload: err });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: { user } });

  RouterActions.main();
};
