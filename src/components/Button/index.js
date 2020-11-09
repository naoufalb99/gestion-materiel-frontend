import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  button: {
    backgroundColor: "#3454d1",
    color: "#FFF",
    textDecoration: "none",
    borderRadius: "100px",
    padding: "8px 16px",
    fontSize: 12,
    fontWeight: 600,
    boxShadow: "0 3px 8px -2px rgba(52,84,209, .3)",
    border: "1px solid #3454d1",
    transition: "background-color .3s ease, color .3s ease",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#3454d1",
    },
  },
});

const Button = (props) => {
  const classes = useStyles();

  const { to } = props;
  if (to) {
    return <Link {...props} className={classes.button} />;
  }
  return <button {...props} className={classes.button} />;
};

export default Button;