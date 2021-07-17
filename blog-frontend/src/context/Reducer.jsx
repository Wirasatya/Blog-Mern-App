export const initialState = {
  user: null || JSON.parse(sessionStorage.getItem("user")),
};

const Reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default Reducer;
