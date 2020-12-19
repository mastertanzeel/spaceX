import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  withStyles,
  Grid,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

// import logo
import Logo from "../assets/logo3.png";

const styleSheet = {
  list: {
    width: 200,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },

  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
};

function Navbar(props) {
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDrawerActivate(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setDrawerActivate(true);
      } else {
        setDrawerActivate(false);
      }
    });
  }, []);

  //Small Screens
  const createDrawer = () => {
    return (
      <div>
        <AppBar style={{ backgroundColor: "#FFFFFF" }} className="heading-text">
          <Toolbar style={{ height: "65px" }}>
            <Grid container direction="row" alignItems="center">
              <MenuIcon
                className={props.classes.sideBarIcon}
                style={{ color: "navy" }}
                onClick={() => {
                  setDrawer(true);
                }}
              />
              <img
                src={Logo}
                onClick={() => history.push("/")}
                height="80px"
                width="80px"
                alt=""
                style={{ marginLeft: "30%" }}
              />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={drawer}
          onClose={() => {
            setDrawer(false);
          }}
          onOpen={() => {
            setDrawer(true);
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              setDrawer(false);
            }}
            onKeyDown={() => {
              setDrawer(false);
            }}
          >
            <List className={props.classes.list} style={{ color: "navy" }}>
              <ListItem key={1} button divider>
                <Typography
                  color="inherit"
                  variant="h6"
                  className="mx-auto heading-text"
                  style={{ fontFamily: "Quicksand" }}
                >
                  <img
                    src={Logo}
                    onClick={() => history.push("/")}
                    height="80px"
                    width="80px"
                    alt=""
                    style={{ marginLeft: "50%" }}
                  />
                </Typography>
              </ListItem>
              <ListItem
                key={2}
                button
                divider
                onClick={() => history.push("/")}
              >
                Home
              </ListItem>
              <ListItem
                key={3}
                button
                divider
                onClick={() => history.push("/launches")}
              >
                Launches
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  };

  //Larger Screens
  const destroyDrawer = () => {
    const { classes } = props;
    return (
      <AppBar
        style={{ backgroundColor: "#FFFFFF", fontFamily: "Quicksand" }}
        className="heading-text"
      >
        <Toolbar style={{ height: "100px", color: "navy" }}>
          <Typography
            variant="h4"
            style={{ flexGrow: 1, marginLeft: "70px", fontFamily: "Quicksand" }}
            color="inherit"
          >
            <img
              src={Logo}
              onClick={() => history.push("/")}
              height="100px"
              width="100px"
              alt=""
            />
          </Typography>
          <Typography
            className={classes.padding}
            color="inherit"
            onClick={() => history.push("/")}
          >
            <strong>Home</strong>
          </Typography>
          <Typography
            className={classes.padding}
            color="inherit"
            onClick={() => history.push("/launches")}
          >
            <strong>Launches</strong>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };

  return <div>{drawerActivate ? createDrawer() : destroyDrawer()}</div>;
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Navbar);
