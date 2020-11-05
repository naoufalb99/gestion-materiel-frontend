import React from "react";
import { createUseStyles } from "react-jss";
import Header from "../Header";
import Sidebar from "../Sidebar";

const useStyles = createUseStyles({});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
