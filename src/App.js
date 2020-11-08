import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import routes from './config/routes'



function App() {
  return (
    <BrowserRouter>
      <Routes routes={routes} />
    </BrowserRouter>
  );
}

export default App;
