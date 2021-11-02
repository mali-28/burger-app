import React from "react";
import PropTypes from "prop-types";
import { Container, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    maxHeight: 50,
    minHeight: 50,
    background: "#414141",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  message: {
    color: "#fff",
    fontSize: 24,
  },
});

const PageTitle = (props) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <Toolbar className={classes.main}>
      <Container maxWidth={"md"} className={classes.container}>
        <Typography variant={"h1"} className={classes.message}>
          {title}
        </Typography>
      </Container>
    </Toolbar>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
