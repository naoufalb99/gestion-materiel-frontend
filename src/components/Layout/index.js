import React from "react";
import { createUseStyles } from "react-jss";
import Header from "../Header";
import Sidebar from "../Sidebar";

const useStyles = createUseStyles({
  inner: {
    marginLeft: 232,
    marginTop: 32
  }
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Sidebar />
      <div className={classes.inner}>
        {children}
      </div>
    </>
  );
};

export default Layout;
