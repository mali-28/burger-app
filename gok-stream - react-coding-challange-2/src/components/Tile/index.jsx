import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import placeholder from "../../assets/placeholder.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  wrapper: {
    margin: 5,
  },
  imageWrapper: {
    display: "flex",
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
    height: 220,
  },
  title: {
    marginTop: 5,
    color: "#000",
  },
  linkText: {
    cursor: "pointer",
    textDecoration: `none`,
    color: "inherit",
  },
  year: {
    textAlign: "right",
    marginTop: -3,
    fontSize: 12,
    color: "#868686",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

const Tile = (props) => {
  const classes = useStyles();
  const { img, title, year, link } = props.item;

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img
          alt={"not available"}
          className={img ? classes.image : ""}
          src={img || placeholder}
        />
      </div>
      <Typography variant={"body2"} className={classes.title}>
        {link ? (
          <Link to={link} className={classes.linkText}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Typography>
      {year ? (
        <Typography variant={"body2"} className={classes.year}>
          {year}
        </Typography>
      ) : null}
    </div>
  );
};

Tile.propTypes = {
  item: PropTypes.exact({
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    link: PropTypes.string,
  }),
};

export default Tile;
