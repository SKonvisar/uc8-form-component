import { formReducer } from "../reducer";
import { SUBMIT_FORM } from "../actions";

describe("formReducer", () => {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };

  it("should return the initial state when no action is provided", () => {
    const newState = formReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should handle SUBMIT_FORM action", () => {
    const payload = {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      message: "Hello, this is a test message.",
    };

    const newState = formReducer(initialState, {
      type: SUBMIT_FORM,
      payload,
    });

    expect(newState).toEqual(payload);
  });

  it("should not modify the state for unknown action types", () => {
    const newState = formReducer(initialState, {
      type: "UNKNOWN_ACTION",
      payload: {},
    });
    expect(newState).toEqual(initialState);
  });
});
