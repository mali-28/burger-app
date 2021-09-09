import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from './routes/Home';
import registerServiceWorker from "./registerServiceWorker";
import UserSignUp from './routes/UserSignUp';
import UserLogin from './routes/UserLogin';
// import Auth from './routes/Auth';

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
      {/* <Route exact path="/auth" component={Auth}/> */}
      <Route exact path="/userLogin" component={UserLogin}/>
      <Route exact path="/userSignup" component={UserSignUp}/>
      <Redirect  to="/"/>
      </Switch>
      </Provider>
      </Context>
    </div>

  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
