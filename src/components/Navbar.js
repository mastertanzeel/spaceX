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
  Badge,
} from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const styleSheet = {
  list: {
    width: window.innerWidth / 1.5,
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
const cart = () => {
  history.push("/myCart")
}
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
                src="https://pngimg.com/uploads/nike/nike_PNG11.png"
                onClick={() => history.push("/")}
                height="30px"
                width="100px"
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
                    src="https://pngimg.com/uploads/nike/nike_PNG11.png"
                    onClick={() => history.push("/")}
                    height="30px"
                    width="100px"
                    alt=""
                    style={{ marginLeft: "50%" }}
                  />
                </Typography>
              </ListItem>
              <ListItem key={2} button divider onClick={() => history.push('/')}>
                Home
              </ListItem>
              <ListItem key={3} button divider onClick={() => history.push('/products')}>
                Products
              </ListItem>
              <ListItem key={4} button divider>
                <Badge
                  color="secondary"
                  badgeContent={props.total_products}
                  showZero
                >
                  <ShoppingCartIcon onClick={cart} />
                </Badge>
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
              src="https://pngimg.com/uploads/nike/nike_PNG11.png"
              onClick={() => history.push("/")}
              height="50px"
              width="150px"
              alt=""
            />
          </Typography>
          <Typography
            className={classes.padding}
            color="inherit"
            onClick={() => history.push('/')}
          >
            <strong>Home</strong>
          </Typography>
          <Typography
            className={classes.padding}
            color="inherit"
            onClick={() => history.push('/products')}
          >
            <strong>Products</strong>
          </Typography>
            <strong>
              <Badge
                color="secondary"
                badgeContent={props.total_products}
                showZero
              >
                  <ShoppingCartIcon onClick={cart} />
              </Badge>
            </strong>
        </Toolbar>
      </AppBar>
    );
  };

  return <div>{drawerActivate ? createDrawer() : destroyDrawer()}</div>;
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    total_products: state.total_products,
  };
};

export default connect(mapStateToProps)(withStyles(styleSheet)(Navbar));
