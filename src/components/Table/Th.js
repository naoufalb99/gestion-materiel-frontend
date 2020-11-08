import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  th: {
    textAlign: "left",
    padding: 8,
    backgroundColor: "#F5F5F5",
    fontWeight: 500,
  },
});

const Th = ({ children }) => {
  const classes = useStyles();
  return <th className={classes.th}>{children}</th>;
};

export default Th;
