import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  td: {
    padding: "16px 8px",
  },
});

const Td = ({ children }) => {
  const classes = useStyles();
  return <td className={classes.td}>{children}</td>;
};

export default Td;
