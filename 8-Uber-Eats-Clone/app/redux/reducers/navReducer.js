const navReducer = (state = false, action) => {
  switch (action.type) {
    case "HIDE_BOTTOM_BAR":
      return true;

    case "SHOW_BOTTOM_BAR":
      return false;
    default:
      return state;
  }
};
export default navReducer;
