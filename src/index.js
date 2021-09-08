import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from './routes/Home';
import registerServiceWorker from "./registerServiceWorker";
import Users from './routes/Users';
import User from './routes/User';
import Auth from './routes/Auth';

import { BrowserRouter, Route ,Redirect, Switch} from "react-router-dom";
import Context from "./context";
import TopBar from "./components/TopBar";

import { Provider } from "react-redux";
import { store } from "./Store/store";
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Context>
        <TopBar/>
        <Provider store={store}>
        <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path='/user/:name' component={User}></Route>
      <Redirect  to="/"/>
      </Switch>
      </Provider>
      </Context>
    </div>

  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
