import Articles from "../pages/admin/Articles";
import AddArticle from "../pages/admin/Articles/AddArticle";
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

  // Admin Articles
  ADMIN_ARTICLES: {
    path: "/admin/articles",
    component: Articles,
    exact: true,
  },
  ADMIN_ARTICLES_ADD: {
    path: "/admin/articles/add",
    component: AddArticle,
  },
};

export default routes;
