import React from "react";
import { createUseStyles } from "react-jss";
import { Link, useHistory } from "react-router-dom";
import { IconChevronLeft } from "tabler-icons";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  goBack_title: {
    display: "flex",
    alignItems: "center",
  },
  goBack: {
    width: 24,
    height: 24,
    color: "#333",
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
  },
});

const PageHeading = ({ children, title, goBack = false }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.goBack_title}>
        {goBack && (
          <Link className={classes.goBack} onClick={() => history.goBack()}>
            <IconChevronLeft size={null} stroke={3} />
          </Link>
        )}
        {title && <h2 className={classes.title}>{title}</h2>}
      </div>
      {children}
    </div>
  );
};

export default PageHeading;
