import {
  ACTIVE_USER,
  DELETE_USER,
  OFF_MOUSE_OVER,
  ON_MOUSE_OVER,
} from "../actionTypes";
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
    case ACTIVE_USER:
      const userList = [...state.users];
      userList[action.payload - 1].isActive = true;
      return { ...state, users: userList };
    case DELETE_USER:
      let deleteUserList = [...state.users];
      console.log(deleteUserList);
      deleteUserList = deleteUserList.filter((data) => {
        console.log(data.id);
        return data.id !== action.payload;
      });
      console.log(deleteUserList);
      return {
        ...state,
        users: deleteUserList,
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
