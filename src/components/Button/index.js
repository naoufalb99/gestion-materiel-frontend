import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  button: {
    outline: "none",
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
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#3454d1",
    },
  },
});

const Button = ({ className, ...props }) => {
  const classes = useStyles();
  className = clsx(classes.button, className);
  const { to } = props;
  if (to) {
    return <Link {...{ className, ...props }} />;
  }
  return <button {...{ className, ...props }} />;
};

export default Button;
