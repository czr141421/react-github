import {BrowserRouter as Router , Route, Switch,Redirect} from 'react-router-dom';
import React from 'react';
import Navbar from "../components/layout/Navbar";
import App from "../App";
import NoMatch from "../views/NoMatch"
import About from "../views/About/About";
import Login from "../views/Login/Login";
export default function IRouter(){
    return  <Router>
        <Switch>
            <Route exact path="/" component={App}>
                <Redirect to="/about"></Redirect>
            </Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login/:id" component={Login}></Route>
            <Route path="*" component={NoMatch}></Route>
        </Switch>
    </Router>
}