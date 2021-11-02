import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  heading: {
    margin: 0,
    fontSize: 40,
    color: "#fff",
    fontWeight: "normal",
  },
});

const SiteTitle = (props) => {
  const classes = useStyles();
  const { title } = props;
  return <Typography variant={"h1"} className={classes.heading}>{title}</Typography>;
};

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteTitle;
