import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./fetchUserActionTypes";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = (currentPage) => {
  console.log(currentPage);
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUserFailure(errorMessage));
      });
  };
};
export { fetchUserFailure, fetchUserRequest, fetchUserSuccess };
