import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Grid,
  SwipeableDrawer,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

// import logo
import Logo from "../assets/logo3.png";

const useStyles = makeStyles((theme: any) => ({
  list: {
    width: 200,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
    color: "yellow",
    fontFamily: "Quicksand",
  },

  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
  link: {
    color: theme.link.color,
    textDecoration: 'none'
  },
}));
function Navbar(props: any) {
  const classes = useStyles();
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [navDisplay, setNavDisplay] = useState("block");

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDrawerActivate(true);
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setNavDisplay("none");
      } else {
        setNavDisplay("block");
      }
    });
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
        <AppBar
          style={{ backgroundColor: "transparent", display: navDisplay }}
          className="heading-text"
        >
          <Toolbar style={{ height: "65px" }}>
            <Grid container direction="row" alignItems="center">
              <MenuIcon
                className={classes.sideBarIcon}
                style={{ color: "white" }}
                onClick={() => {
                  setDrawer(true);
                }}
              />
              <img
                src={Logo}
                height="80px"
                width="80px"
                alt=""
                style={{ marginLeft: "30%", marginRight: "15%" }}
              />
              <Switch
                checked={props.darkState}
                color="primary"
                onChange={props.cb}
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
            <List className={classes.list} style={{ color: "navy" }}>
              <ListItem key={1} button divider>
                <Typography
                  variant="h6"
                  className="mx-auto heading-text"
                  style={{ fontFamily: "Quicksand" }}
                >
                  <a className="link">
                    <img
                      src={Logo}
                      height="80px"
                      width="80px"
                      alt=""
                      style={{ marginLeft: "50%" }}
                    />
                  </a>
                </Typography>
              </ListItem>
              <a className={classes.link}>
                <ListItem key={2} button divider>
                  Home
                </ListItem>
              </a>
              <a className={classes.link}>
                <ListItem key={3} button divider>
                  Launches
                </ListItem>
              </a>
              <ListItem key={4} button divider>
              <Switch
                checked={props.darkState}
                color="primary"
                onChange={props.cb}
              />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  };

  //Larger Screens
  const destroyDrawer = () => {
    return (
      <AppBar
        style={{
          backgroundColor: "transparent",
          fontFamily: "Quicksand",
          color: "yellow",
          display: navDisplay,
        }}
        className="heading-text"
      >
        <Toolbar style={{ height: "100px", color: "yellow" }}>
          <Typography
            variant="h4"
            style={{ flexGrow: 1, marginLeft: "70px", fontFamily: "Quicksand" }}
          >
            <a className="link">
              <img src={Logo} height="100px" width="100px" alt="" />
            </a>
          </Typography>
          <a className="link">
            <h3 className={classes.padding}>
              <strong>Home</strong>
            </h3>
          </a>
          <a className="link">
            <h3 className={classes.padding}>
              <strong>Launches</strong>
            </h3>
          </a>
        </Toolbar>
      </AppBar>
    );
  };

  return <div>{drawerActivate ? createDrawer() : destroyDrawer()}</div>;
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Navbar;
