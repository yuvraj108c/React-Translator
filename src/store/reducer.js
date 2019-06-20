const { origin, href } = window.location;
const language = href.replace(origin, "").slice(1, 3);

const initialState = {
  language: language || "en"
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
