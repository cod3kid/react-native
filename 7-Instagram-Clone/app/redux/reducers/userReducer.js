const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return action.payload;

    default:
      return state;
  }
};
export default userReducer;
