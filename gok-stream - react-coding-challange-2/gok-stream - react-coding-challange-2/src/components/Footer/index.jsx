import React from "react";
import { Container, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    maxHeight: 64,
    background: "#1e1e1e",
  },
  message: {
    color: "#9a989b",
    fontSize: 12,
  },
});

const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Toolbar>
        <Container maxWidth={"md"} className={classes.container}>
          <Typography className={classes.message}>
            Copyright © {new Date().getFullYear()} GOK Stream App. All Rights
            Reserved.
          </Typography>
        </Container>
      </Toolbar>
    </footer>
  );
};

export default Footer;
