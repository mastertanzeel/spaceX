import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { useMissionNamesQuery } from "../generated/graphql";
import { useMissiondetailsQuery } from "../generated/graphql";


function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

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
      </Box> : <h2>Loading...</h2>
      }
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    marginTop: '300px',
    fontFamily: 'bold',
    fontSize: '20px'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: window.innerWidth > 720 ? '300px' : '110px'
  },
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
        return <TabPanel value={value} index={index} key={index}>
          {key.mission_id}
        </TabPanel>;
      }) : <p></p>}

    </div>
  );
};

