import { SUBMIT_FORM } from "./actions";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  message: "",
};

export const formReducer = (state = initialState, action) => {
  if (action.type === SUBMIT_FORM) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};

export default formReducer;
