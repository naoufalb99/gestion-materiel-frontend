import Articles from "../pages/admin/Articles";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = {
  HOME: {
    path: "/",
    component: Home,
    exact: true,
  },
  LOGIN: {
    path: "/login",
    component: Login,
  },
  ADMIN_ARTICLES: {
    path: "/articles",
    component: Articles,
  },
};

export default routes;
