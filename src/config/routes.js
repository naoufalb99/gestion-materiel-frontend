import Articles from "../pages/admin/Articles";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default {
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
