const onMouseHover = (id) => {
  return {
    type: 'onMouseOver',
    payload: id,
  };
};
const offMouseHover = () => {
  return {
    type: 'offMouseOver',
  };
};
export { onMouseHover, offMouseHover };
