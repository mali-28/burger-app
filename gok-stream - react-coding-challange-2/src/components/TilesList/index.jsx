import React from "react";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Tile from "../Tile";

const useStyles = makeStyles({
  root: {
    margin: "30px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    "&>ul": {
      flex: 1,
    },
  },
});

const TilesList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={"auto"} cols={5}>
        {props.list.map((item, i) => (
          <GridListTile key={i} cols={1}>
            <Tile item={item} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

TilesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      title: PropTypes.string.isRequired,
      year: PropTypes.number,
      link: PropTypes.string,
    })
  ),
};

export default TilesList;
