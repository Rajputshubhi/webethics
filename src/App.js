import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Menu from './Menu.js';
import About from './About.js';
import Profile from './Profile.js';
import NewApicomp from './NewApicomp.js';
const App = () => {
    return (
        <div>
        <div className="main-div">
            <h1><span style={{color:'red'}}>WEB</span>ethics</h1>
            <Menu />
            <div className="route-div">
            <Switch>
               <Route exact path="/" component={NewApicomp} />
               <Route exact path="/about" component={About} />
               <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
          </div>
        </div>
    )
}

export default App
