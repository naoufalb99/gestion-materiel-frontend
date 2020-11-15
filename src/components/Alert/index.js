import clsx from "clsx";
import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { IconAlertCircle } from "tabler-icons";
import { hideAlert } from "../../actions/alertActions";

const useStyles = createUseStyles({
  alert: {
    backgroundColor: "#FFF6F6",
    color: "#912d2b",
    border: "1px solid #e0b4b4",
    borderRadius: 4,
    fontSize: 13,
    fontWeight: "600",
    padding: "16px 16px",
    display: "flex",
    alignItems: "center",
    "& .icon": {
      marginRight: 8,
    },
  },
});

const alertIcons = {
  error: <IconAlertCircle />,
};

const Alert = () => {
  const classes = useStyles();
  const { message, type, visible } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(hideAlert());
  }, [dispatch]);

  if (!visible) return null;
  return (
    <div className={clsx(classes.alert, classes[type])}>
      {alertIcons[type]}
      <p>{message}</p>
    </div>
  );
};

export default Alert;
