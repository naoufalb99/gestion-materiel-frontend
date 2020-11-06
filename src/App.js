import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./components/Layout";

// TODO:
export const Home = () => {
  return (
    <Layout>
      <h1>Dashboard.</h1>
    </Layout>
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
