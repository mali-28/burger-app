import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Instructions from "./screens/Instructions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core";
import DataList from "./screens/DataList";

const useStyles = makeStyles({
  body: {
    minHeight: "calc(100vh - 128px)",
    boxSizing: "border-box",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className={classes.body}>
          <Switch>
            <Route exact path="/" component={Instructions} />
            <Route exact path="/home" component={Home} />
            <Route
              exact
              path="/movies"
              render={(props) => <DataList {...props} type={"movie"} />}
            />
            <Route
              exact
              path="/series"
              render={(props) => <DataList {...props} type={"series"} />}
            />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
