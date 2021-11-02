import {
  Container,
  FormControl,
  makeStyles,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { get } from "../../common/functions";
import PageTitle from "../../components/PageTitle";
import TilesList from "../../components/TilesList";
import SortAsc from "../../assets/SortAsc.png";
import SortDesc from "../../assets/SortDesc.png";

const useStyles = makeStyles({
  actionsWrapper: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
  sortWrapper: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 600,
    justifyContent: "center",
    fontSize: 15,
    userSelect: "none",
    marginRight: 20,
  },
  sortIconWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  noData: {
    textAlign: "center",
  },
});

const DataList = (props) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [tilesList, setTilesList] = useState([]);
  const [fiteredList, setFiteredList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState("");

  const length = 25;

  useEffect(() => {
    const pullImageUrl = (item) => {
      if (
        item &&
        item.images &&
        item.images["Poster Art"] &&
        item.images["Poster Art"].url
      ) {
        return item.images["Poster Art"].url;
      }
      return "";
    };
    setIsLoading(true);
    get("https://mumer01.github.io/publicApis/BoxOffice.json")
      .then((data) => {
        setIsLoading(false);
        const list = [];
        if (data && data.entries && Array.isArray(data.entries)) {
          data.entries.forEach((item, i) => {
            if (item?.programType === props.type) {
              list.push({
                img: pullImageUrl(item),
                title: item?.title,
                year: item?.releaseYear,
              });
            }
          });
        }
        setTilesList(list);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setError("Oops, something went wrong...");
      });
  }, [props.type]);

  useEffect(() => {
    setError("");
    setYear("");
    setTilesList([]);
    setFiteredList([]);
    setSortOrder("asc");
  }, [props.type]);

  useEffect(() => {
    setFiteredList(filter_sort(tilesList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tilesList, sortOrder, year]);

  const filter_sort = (list) => {
    list = JSON.parse(JSON.stringify(list));
    return list
      .filter((item) => !year || `${item.year}` === `${year}`)
      .sort((a, b) => {
        const a_title = `${a.title}`.toLowerCase();
        const b_title = `${b.title}`.toLowerCase();
        if (a_title < b_title) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (a_title > b_title) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      })
      .splice(0, length);
  };

  return (
    <div>
      <PageTitle
        title={`Popular ${props.type === "movie" ? "Movies" : "Series"}`}
      />
      <Container maxWidth={"md"}>
        <div className={classes.actionsWrapper}>
          <div
            className={classes.sortWrapper}
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            <span className={classes.sortIconWrapper}>
              {sortOrder === "asc" ? (
                <img src={SortAsc} alt={"asc"} />
              ) : (
                <img src={SortDesc} alt={"desc"} />
              )}
            </span>
            Sort
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Select
                native
                value={year}
                onChange={(event) => setYear(event.target.value)}
                inputProps={{
                  name: "year",
                  id: "year",
                }}
              >
                <option aria-label="None" value="" />
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
              </Select>
            </FormControl>
          </div>
        </div>
        {fiteredList && fiteredList.length && !error ? (
          <TilesList list={fiteredList} />
        ) : (
          <Typography className={classes.noData}>
            {error ? error : isLoading ? "Loading..." : "No DataList!"}
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default DataList;
