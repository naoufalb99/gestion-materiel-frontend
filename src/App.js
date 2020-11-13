import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import routes from "./config/routes";
import AuthenticatedLayout from "./components/Layout/AuthenticatedLayout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthenticatedLayout>
          <Routes routes={routes} />
        </AuthenticatedLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
