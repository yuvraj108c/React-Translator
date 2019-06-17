const initialState = {
  language: "en"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.value };

    default:
      return state;
  }
};
export default reducer;
