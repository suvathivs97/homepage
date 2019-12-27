import React from 'react';
import { BrowserRouter, Route, Switch,withRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Login from'./Login';
import 'antd/dist/antd.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Headers';
import './App.css';



class  App extends React.Component {
  render(){
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Headers} exact />
          <Route path="/SignUp"component={SignUp}/>
          <Route path="/Login"component={Login}/>
         </Switch>
</BrowserRouter>
    
  );
}
}
export default App;

