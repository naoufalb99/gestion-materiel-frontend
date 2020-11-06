import { NavLink } from "react-router-dom";
import React from "react";
import { createUseStyles } from "react-jss";
import { IconApps, IconCirclePlus, IconHome, IconLogout } from "tabler-icons";

const useStyles = createUseStyles({
  container: {
    width: 93,
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 140,

    transition: "width 0.1s",
    "&:hover": {
      width: 200,
      "& span": {
        visibility: "visible",
        opacity: 1,
      },
    },
  },
  navMenu: {
    listStyle: "none",
    "& a": {
      textDecoration: "none",
      display: "block",
      color: "#333",
      "&.selected .svg": {
        backgroundColor: "#F8F6F7",
      },
    },
    "& li": {
      marginBottom: "16px",
      borderRadius: "0 16px 16px 0",
      whiteSpace: "nowrap",
      transition: "backgroundColor .5s",
      "&:hover": {
        backgroundColor: "#F8F6F7",
      },
    },
    "& span,& svg ": {
      verticalAlign: "middle",
    },
    "& span": {
      fontSize: 14,
      marginLeft: 16,
      visibility: "hidden",
      opacity: 0,
      transition: "opacity .3s ",
    },
    "& .svg": {
      padding: "12px 16px 12px 30px",
      display: "inline-block",
      borderRadius: "0 24px 24px 0",
    },
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ul className={classes.navMenu}>
        <li>
          <NavLink to="/" activeClassName="selected">
            <div className="svg">
              <IconHome stroke={1.5} size={33} />
            </div>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">
            <div className="svg">
              <IconCirclePlus stroke={1.5} size={33} />
            </div>
            <span>Add Item</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">
            <div className="svg">
              <IconApps stroke={1.5} size={33} />
            </div>
            <span>Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">
            <div className="svg">
              <IconLogout stroke={1.5} size={33} />
            </div>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
