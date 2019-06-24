import * as actionTypes from "./types";

export const changeLanguage = language => {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    value: language
  };
};
