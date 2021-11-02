import React from "react";
import { Container, makeStyles, AppBar, Toolbar } from "@material-ui/core";
import SiteTitle from "../SiteTitle";
import Navigation from "../Navigation";

const useStyles = makeStyles({
  header: {
    maxHeight: 64,
    background: "linear-gradient(#0098fe, #0166fc)",
  },
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: `space-between`,
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Container maxWidth={"md"} className={classes.container}>
          <SiteTitle title={"GOK Stream"} />
          <Navigation />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
