import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import FirstScreen from "./containers/FirstScreen";
import RegisterScreen from "./containers/RegisterScreen";
import LoginScreen from "./containers/LoginScreen";
import RegisterSuccess from "./containers/RegisterSuccess";
import MainScreen from "./containers/MainScreen";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={FirstScreen} />
    <Route path="/register" component={RegisterScreen} />
    <Route path="/login" component={LoginScreen} />
    <Route path="/registersuccess" component={RegisterSuccess} />
    <Route path="/main" component={MainScreen} />
  </Switch>
);

export default App;
