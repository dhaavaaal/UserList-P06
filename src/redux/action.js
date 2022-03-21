import { ON_MOUSE_OVER, OFF_MOUSE_OVER, ACTIVE_USER } from "./actionTypes";
const onMouseHover = (id) => {
  return {
    type: ON_MOUSE_OVER,
    payload: id,
  };
};
const offMouseHover = () => {
  return {
    type: OFF_MOUSE_OVER,
  };
};
const activateUser = (id) => {
  return {
    type: ACTIVE_USER,
    payload: id,
  }
}
export { onMouseHover, offMouseHover, activateUser };
