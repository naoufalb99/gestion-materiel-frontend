import { NavLink } from "react-router-dom";
import React from "react";
import { createUseStyles } from "react-jss";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-home"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            </div>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-plus"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
            </div>
            <span>Add Item</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-apps"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
                <line x1="14" y1="7" x2="20" y2="7" />
                <line x1="17" y1="4" x2="17" y2="10" />
              </svg>
            </div>
            <span>Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-logout"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
            </div>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
