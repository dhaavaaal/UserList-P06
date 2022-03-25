import {
  DELETE_USER,
  OFF_MOUSE_OVER,
  ON_MOUSE_OVER,
} from "../previousReduxStore/actionTypes";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./fetchUserActionTypes";

const initialState = {
  userId: null,
  loading: true,
  users: [],
  error: "",
};

const fetchUserReducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case ON_MOUSE_OVER:
      return {
        ...state,
        userId: action.payload,
      };

    case OFF_MOUSE_OVER:
      return {
        ...state,
        userId: null,
      };

    case DELETE_USER:
      let deleteUserList = { ...state };
      console.log(deleteUserList);
      let deleteUserLists = deleteUserList.users.data.filter((data) => {
        console.log(data.id);
        return data.id !== action.payload;
      });
      deleteUserList.users.data = deleteUserLists;
      let trying = deleteUserList.users;
      console.log(deleteUserLists);
      console.log(deleteUserList);
      return {
        ...state,
        users: trying,
        userId: null,
      };

    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchUserReducerFunction;
