import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import routes from "../../config/routes";
import Login from "../../pages/Login";
import Loader from "../Loader";
import DefaultLayout from "./index";
import { checkToken } from "../../actions/authAction";

const AuthenticatedLayout = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      history.push(routes.LOGIN.path);
    } else if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, loading, history]);

  if (loading) return <Loader />;
  if (!isAuthenticated)
    return <Route path={routes.LOGIN.path} component={Login} />;
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default AuthenticatedLayout;
