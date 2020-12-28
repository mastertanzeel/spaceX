import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper"

import { useMissionNamesQuery } from "../generated/graphql";
import { useMissiondetailsQuery } from "../generated/graphql";

import Loader from "../assets/loade4.gif"



function TabPanel(props: any) {
  const { children, value, color,button, index, ...other } = props;

  const { data, loading } = useMissiondetailsQuery({
    variables: {
      id: `${value === index && (
        children
      )}`
    }
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {!loading ? <Box p={3}>
        <h1>{data?.mission?.mission_name}</h1>
        <Typography>{data?.mission?.description}</Typography>
        <a
          href={`${data?.mission?.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className={color}
        >
          Twitter
          </a>
        <a
          href={`${data?.mission?.wikipedia}`}
          target="_blank"
          rel="noopener noreferrer"
          className={color}
        >
          Wikipedia
          </a>
        <br />
        <br />
        <Button
          size="small"
          variant="contained"
          onClick={() => window.open(`${data?.mission?.website}`)}
          color="secondary"
          className={button}
        >
          <strong>WEBSITE</strong>
        </Button>

      </Box> : <div style={{ display: 'flex', width: '90%', flexGrow: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
          <img src={Loader} height="200px" width="250px" alt="" />
        </div>
      }
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  color: PropTypes.any.isRequired,
  button: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: any) => ({
  parent: {
    display: "flex",
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    display: "flex",
    fontFamily: 'bold',
    fontSize: '20px'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: window.innerWidth > 720 ? '300px' : '110px',
  },
  heading: {
    color: theme.palette.primary.contrastText,
    margin: '1em 0 0.5em 10px',
    fontWeight: 'bold',
    fontFamily: ' serif',
    textDecoration: 'underline',
    fontSize: '2em',
    lineHeight: '42px',
    textTransform: 'uppercase',
  },
  paper: {
    width: '98%',
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: theme.palette.primary.main
  },
  link: {
    color: theme.palette.secondary.light,
    marginRight: '10px',
    fontSize: '22px'
  },
  button: {
    "&:hover": {
      backgroundColor: theme.darkButton.hoverColor
  }}
}));

export default function MissionTable() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [missionFetched, setMissionFetched] = useState<boolean>(false);

  const { data, loading } = useMissionNamesQuery();

  useEffect(() => {
    if (!loading) {
      setMissionFetched(true);
    }
  }, [loading, data]);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.parent}>
      <h2 style={{ marginLeft: '10px' }} className={classes.heading}>Missions:</h2>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {missionFetched === true ? data?.missions?.map?.((key: any, index: number) => {
              return <Tab label={key.mission_name} {...a11yProps(index)} key={index} />;
            }) : <p></p>}
          </Tabs>
          {missionFetched === true ? data?.missions?.map?.((key: any, index: number) => {
            return <TabPanel value={value} index={index} button={classes.button} color={classes.link} key={index}>
              {key.mission_id}
            </TabPanel>;
          }) : <p></p>}
        </div>

      </Paper>

    </div>
  );
};

