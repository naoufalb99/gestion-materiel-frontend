import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 13,
  },
});

const Table = ({ children }) => {
  const classes = useStyles();
  return <table className={classes.table}>{children}</table>;
};

export default Table;
