import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

import style from "../styles/BuyProcess.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "850px",
    height: "450px",
    backgroundColor: "transparent",
    borderBottom: "1px solid white",
  },
}));

const BuyProcessComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Choose" {...a11yProps(0)} />
            <Tab label="Contact me" {...a11yProps(1)} />
            <Tab label="Payment" {...a11yProps(2)} />
            <Tab label="Delivery" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <article className={style.buy_process_child}>
            <p>Choose a services that fit with your situation</p>
            <Button variant="contained">Services</Button>
          </article>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <article className={style.buy_process_child}>
            <p>Contact me, I will handle your problem personally</p>
            <Button variant="contained">Contact Me</Button>
          </article>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <article className={style.buy_process_child}>
            <p> I will send you an email with the consulting price</p>
          </article>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <article className={style.buy_process_child}>
            <p>
              Once your payment is confirmed you'll receive all the documents
              need it to solve your case.
            </p>
          </article>
        </TabPanel>
      </div>
    </div>
  );
};

export default BuyProcessComponent;
