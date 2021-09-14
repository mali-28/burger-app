import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from './routes/Home';
import registerServiceWorker from "./registerServiceWorker";
import UserSignUp from './routes/UserSignUp';
import UserLogin from './routes/UserLogin';
import Order from "./routes/Order";
import Checkout from './routes/Checkout';

import { BrowserRouter, Route ,Redirect, Switch} from "react-router-dom";
import TopBar from "./components/TopBar";

import { Provider } from "react-redux";
import { store } from "./Store/store";
import Context from './context/context'
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Context>
        <TopBar/>
        <Provider store={store}>
        <Switch>
        <Route exact path="/" component={Home} />
      <Route exact path="/login" component={UserLogin}/>
      <Route exact path="/signup" component={UserSignUp}/>
      <Route exact path="/order" component={Order}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Redirect  to="/"/>
      </Switch>
      </Provider>
      </Context>
    </div>

  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
