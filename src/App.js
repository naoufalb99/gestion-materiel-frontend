import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import routes from "./config/routes";
import DefaultLayout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes routes={routes} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
