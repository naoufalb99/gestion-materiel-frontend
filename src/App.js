import { BrowserRouter, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./components/Layout";

// TODO:
export const Home = () => {
  return (
    <Layout>{/* <Link to="/login">go to login page (Link) </Link> */}</Layout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
