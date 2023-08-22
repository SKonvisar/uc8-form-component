import { createStore } from "redux";
import { Provider } from "react-redux";

import { formReducer } from "./reducer";

const store = createStore(formReducer);

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
