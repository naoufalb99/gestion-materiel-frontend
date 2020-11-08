import React from "react";
import { createUseStyles } from "react-jss";
import Header from "../Header";
import Sidebar from "../Sidebar";

const useStyles = createUseStyles({
  inner: {
    margin: '32px 32px 0 232px'
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
