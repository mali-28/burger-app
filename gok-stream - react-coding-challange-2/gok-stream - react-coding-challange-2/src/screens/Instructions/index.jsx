import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import Task1Image from "../../assets/task-1.png";
import Task2Image from "../../assets/task-2.png";
import Task3Image from "../../assets/task-3.png";

const useStyles = makeStyles(() => {
  return {
    root: {
      margin: "10px 20px",
    },
    title: {
      textAlign: "center",
      textTransform: "uppercase",
      textDecoration: "underline",
    },
    taskImgs: {
      width: 800,
      height: 550,
    },
  };
});

const Instructions = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant={"h4"}>
        Instructions
      </Typography>
      <div>
        <Typography variant={"h5"}>Note</Typography>
        <ul>
          <li>Code should be clean.</li>
          <li>Properly divided in components.</li>
          <li>Show Loading state and Empty state when needed.</li>
          <li>Following good practices will be a plus.</li>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <Typography variant={"h5"}>First Task</Typography>
        <div>
          <p>
            Create route "/Home" to render Home component. Component should be
            named as <b>Home</b>.
          </p>
          <p>The Home component will contain:</p>
          <ul>
            <li>
              <b>Header:</b> "GOK Streaming" title on left and navigation links
              (Home, Movies, Series) on the right.
            </li>
            <li>
              <b>Body:</b> This section will contain two tiles(boxes)
              <li>
                Each title will be linked to their respective screens(routes).
              </li>
              1. <b>Series</b>
              <br />
              2. <b>Movies</b>
            </li>
            <li>
              <b>Footer:</b> Copyrights text in middle e.g (© 2020 Geeks of
              Kolachi. All Rights Reserved.)
            </li>
          </ul>
        </div>
        <br />
        <Typography variant={"h6"}>First Task Example:</Typography>
        <img src={Task1Image} alt="Task 1" className={classes.taskImgs} />
      </div>
      <br />
      <br />
      <br />
      <div>
        <Typography variant={"h5"}>Second Task</Typography>
        <div>
          <p>
            Create route "/Series" and "/Movies" to render their components.
            Components names should be <b>"Series"</b> and <b>"Movies"</b>{" "}
            respectively.
          </p>
          <p>Each components will contain:</p>
          <ul>
            <li>
              <b>Header:</b> GOK Streaming on left and Links on right.
            </li>
            <li>
              <b>Footer:</b> Copyrights text in middle e.g (© 2020 Geeks of
              Kolachi. All Rights Reserved.)
            </li>
            <li>
              <b>Body:</b> This section will contain tiles of Movies/Series{" "}
              <b>(Max 25)</b> data will be fetched through API{" "}
              <b>("https://mumer01.github.io/publicApis/BoxOffice.json")</b>
            </li>
            <li>Each tile will have [Image, Title, Year].</li>
          </ul>
        </div>
        <br />
        <Typography variant={"h6"}>Second Task Example:</Typography>
        <img src={Task2Image} alt="Task 2" className={classes.taskImgs} />
      </div>
      <br />
      <br />
      <br />
      <div>
        <Typography variant={"h5"}>Third Task</Typography>
        <div>
          <p>
            <b>Filter:</b> On the basis of dropdown [Year wise: (2014, 2015,
            2016, 2017)], At top right corner of body.
          </p>
          <p>
            <b>Sort:</b> On the basis of title, next to dropdown
          </p>
        </div>
        <br />
        <Typography variant={"h6"}>Third Task Example:</Typography>
        <img src={Task3Image} alt="Task 3" className={classes.taskImgs} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Instructions;
