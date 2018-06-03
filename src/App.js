import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FirstScreen from './containers/FirstScreen';
import RegisterScreen from './containers/RegisterScreen';
import LoginScreen from './containers/LoginScreen';
import RegisterSuccess from './containers/RegisterSuccess';
import MainScreen from './containers/MainScreen';
import StopBlockScreen from './containers/StopBlockScreen';
import ChatRequestDetail from './containers/ChatRequestDetail';
import MessageScreen from './containers/MessageScreen';
import CreateNewChat from './containers/CreateNewChat';
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Switch>
    <Route exact path="/" component={FirstScreen} />
    <Route path="/register" component={RegisterScreen} />
    <Route path="/login" component={LoginScreen} />
    <PrivateRoute path="/registersuccess" component={RegisterSuccess} />
    <PrivateRoute path="/main" component={MainScreen} />
    <Route path="/stop-block/:name" component={StopBlockScreen} />
    <Route path="/request-detail/:id" component={ChatRequestDetail} />
    <Route path="/message/:id" component={MessageScreen} />
    <Route path="/new-chat" component={CreateNewChat} />
  </Switch>
);

export default App;
