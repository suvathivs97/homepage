import React from 'react';
import { BrowserRouter, Route, Switch,withRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Headers';
import SignUp from "./SignUp";
import Login from'./Login';
import Wishlist from './Wishlist'
import Contents from './Contents'
import Bag from'./Bag';
import './App.css';



class  App extends React.Component {
  render(){
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Headers} exact />
          <Route path="/SignUp"component={SignUp}/>
          <Route path="/Login"component={Login}/>
          <Route path="/Contents"component={Contents}/>
          <Route path="/Wishlist" component={Wishlist}/>
          <Route path="/Bag" component={Bag}/>
         </Switch>
</BrowserRouter>
    
  );
}
}
export default App;

