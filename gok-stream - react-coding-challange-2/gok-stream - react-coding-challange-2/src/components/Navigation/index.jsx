import React from "react";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const Navigation = (props) => {
  const classes = useStyles();
  const navLinks = [
    { title: `Home`, path: `/Home` },
    { title: `Series`, path: `/Series` },
    { title: `Movies`, path: `/Movies` },
  ];
  return (
    <nav>
      <List
        component="nav"
        aria-labelledby="main navigation"
        className={classes.navDisplayFlex}
      >
        {navLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </nav>
  );
};

export default Navigation;
