import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import { IconBell } from "tabler-icons";
import Avatar from "./Avatar";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    padding: {
      left: 32,
      right: 32,
    },
    marginTop: 40,
  },
  logo: {
    minWidth: 200,
  },
  actions: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  notifications: {
    position: "relative",
    marginRight: 32,
    width: 30,
    height: 30,
    "& svg": {
      stroke: "#333",
    },
    "&.active:after": {
      content: '""',
      position: "absolute",
      right: 4,
      top: 1,
      width: 9,
      height: 9,
      backgroundColor: "red",
      borderRadius: "100%",
      boxShadow: "0 0 0 2px #FFF",
    },
  },
  profile: {
    position: "relative",
  },
  profileInner: {
    userSelect: "none",
    cursor: "pointer",
    "& > *": {
      verticalAlign: "middle",
    },
  },
  profileName: {
    color: "#3E3E3E",
    fontSize: 14,
    fontWeight: 500,
    marginLeft: 8,
  },
});

const Header = () => {
  const classes = useStyles();
  const [profileDropDownIsOpen, setProfileDropDownIsOpen] = useState(false);
  const profileName = useSelector((state) => state.auth.user.name);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>LOGO.</h1>
      </div>
      <SearchBar />
      <div className={classes.actions}>
        <div className={[classes.notifications, "active"].join(" ")}>
          <IconBell stroke={1.5} size={null} />
        </div>
        <div className={classes.profile}>
          <div
            className={classes.profileInner}
            onClick={() => setProfileDropDownIsOpen(!profileDropDownIsOpen)}
          >
            <Avatar size={48} />{" "}
            <span className={classes.profileName}>{profileName}</span>
          </div>
          <DropDown
            isOpen={profileDropDownIsOpen}
            onClose={() => setProfileDropDownIsOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
