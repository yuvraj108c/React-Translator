const { origin, href } = window.location;
const initialLanguage = href.replace(origin, "").slice(1, 3);

const initialState = {
  language: initialLanguage || "en"
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.value };

    default:
      return state;
  }
};

export default rootReducer;
