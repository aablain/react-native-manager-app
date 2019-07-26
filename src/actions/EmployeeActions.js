import firebase from "firebase";
import { Actions as RouterActions } from "react-native-router-flux";

import {
  EMPLOYEE_CREATED,
  EMPLOYEE_UPDATED,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_FROM_UPDATE
} from "../constants/";

export const employeeFormUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_FROM_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({
        name,
        phone,
        shift
      })
      .then(() => {
        RouterActions.employeeList({ type: "reset" });
        dispatch({ type: EMPLOYEE_CREATED });
      });
  };
};

export const employeeSaveChanges = ({ name, phone, shift, id }) => {
  return dispatch => {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${id}`)
      .set({ name, phone, shift })
      .then(() => {
        RouterActions.employeeList({ type: "reset" });
        dispatch({ type: EMPLOYEE_UPDATED });
      });
  };
};

export const employeesFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const deleteEmployee = ({ id }) => {
  return dispatch => {
    const { currentUser } = firebase.auth();

    console.log(
      `Going to delete user as /users/${currentUser.uid}/employees/${id}`
    );

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${id}`)
      .remove()
      .then(() => {
        RouterActions.employeeList({ type: "reset" });
      });
  };
};
