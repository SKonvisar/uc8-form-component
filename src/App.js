import { StoreProvider } from "./redux";
import { FormPage } from "./components/FormPage";

const App = () => (
  <StoreProvider>
    <FormPage />
  </StoreProvider>
);

export default App;
