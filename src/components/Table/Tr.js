import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tr: {
    transition: "transform .1s",
    "&:nth-child(odd)": {
      backgroundColor: "#F5F5F5",
    },
    "&:not(:first-child):hover": {
      transform: "scale(1.01)",
    },
  },
});

const Tr = ({ children }) => {
  const classes = useStyles();
  return <tr className={classes.tr}>{children}</tr>;
};

export default Tr;
