import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { useMissiondetailsQuery } from "../generated/graphql";


interface ParentProps {
  data: any;
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  const { data, loading, error } = useMissiondetailsQuery({
    variables: {
      id: `${value === index && (
        children
      )}`
    }
  });

  if (loading) {
    return <h2>Loading ...</h2>;
  }
  if (error) {
    console.log(error);
  }


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>
      <h1>{data?.mission?.mission_name}</h1>
      <Typography>{data?.mission?.description}</Typography>
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: string) {
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
    minWidth: window.innerWidth > 720 ? '300px' : '150px'
  },
}));

const MissionTable: React.FC<ParentProps> = ({ data }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  const func = (event: any) => {
    console.log(event)
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
        {data?.missions?.map?.((key: any, index: string) => {
          return <Tab label={key.mission_name} {...a11yProps(index)} key={index} />;
        })}
      </Tabs>
      {data?.missions?.map?.((key: any, index: string) => {
        return <TabPanel value={value} index={index} key={index}>
          {key.mission_id}
        </TabPanel>;
      })}

    </div>
  );
};
export default MissionTable;
