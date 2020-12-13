import {BrowserRouter as Router , Route, Switch,Redirect} from 'react-router-dom';
import React, {Fragment} from 'react';
import "antd/dist/antd.css"; 
import Navbar from "./components/layout/Navbar";
import Search from "./components/search/search";
import Users from "./components/users/users";
import Alert from "./components/alert/alert";
import About from "./views/About/About";
import User from "./views/User/User";
import './App.scss';
import AlertState from "./context/alert/alertState";
import GithubState from "./context/github/githubState";
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound/NotFound"

const App = () => {
    // const {users,user,loading,repos} = this.state
    return(
      <GithubState>
        <AlertState>
        <Router>
          <div className="navbar bg-primary">
            <Navbar title="Github Finder" icon="fa fa-github"></Navbar>
            <Alert></Alert>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:user" component={User} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </AlertState>
      </GithubState>
    ) 
}

export default App;


