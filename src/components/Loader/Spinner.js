import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@keyframes spinner": {
    from: {
      transform: "rotate(0)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    position: "relative",
    width: 66,
    height: 66,
    borderRadius: "100%",
    border: "6px solid rgba(0, 0, 0, .14)",
    borderTop: "6px solid rgba(0, 0, 0, .5)",
    transform: "rotate(0)",
    animation: "$spinner 800ms infinite linear",
  },
});

const Spinner = ({ page = false }) => {
  const classes = useStyles();

  if (!page) {
    return <div className={classes.spinner}></div>;
  } else {
    return (
      <div className={classes.container}>
        <div className={classes.spinner}></div>
      </div>
    );
  }
};

export default Spinner;
