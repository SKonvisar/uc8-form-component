import { SUBMIT_FORM } from "./actions";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  message: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
