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
    display: "inline-block",
    width: 22,
    height: 22,
    borderRadius: "100%",
    border: ({ color }) => `4px solid rgba(${color}, ${color}, ${color}, .24)`,
    borderTop: ({ color }) =>
      `4px solid rgba(${color}, ${color}, ${color}, .6)`,
    transform: "rotate(0)",
    animation: "$spinner 800ms infinite linear",
  },
});

const Spinner = ({ page = false, dark = true }) => {
  const classes = useStyles({ color: dark ? 0 : 255 });

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
