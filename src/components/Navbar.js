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
import { useHistory, Link } from "react-router-dom";

// import logo
import Logo from "../assets/logo3.png";

const styleSheet = {
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
};

function Navbar(props) {
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [navDisplay, setNavDisplay] = useState("block");
  const history = useHistory();
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
                className={props.classes.sideBarIcon}
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
                  variant="h6"
                  className="mx-auto heading-text"
                  style={{ fontFamily: "Quicksand" }}
                >
                  <Link className="link" to="/">
                    <img
                      src={Logo}
                      height="80px"
                      width="80px"
                      alt=""
                      style={{ marginLeft: "50%" }}
                    />
                  </Link>
                </Typography>
              </ListItem>
              <Link className="link" to="/">
                <ListItem
                  key={2}
                  button
                  divider
                  onClick={() => history.push("/")}
                >
                  Home
                </ListItem>
              </Link>
              <Link className="link" to="/launches">
                <ListItem key={3} button divider>
                  Launches
                </ListItem>
              </Link>
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
            <Link className="link" to="/">
              <img src={Logo} height="100px" width="100px" alt="" />
            </Link>
          </Typography>
          <Link className="link" to="/">
            <h3 className={classes.padding}>
              <strong>Home</strong>
            </h3>
          </Link>
          <Link className="link" to="/launches">
            <h3 className={classes.padding}>
              <strong>Launches</strong>
            </h3>
          </Link>
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
