import { UPDATE_FORM } from "./actions";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  message: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};
