import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from '../App';

var routes = (
    <Router history = {browserHistory}>
        <Route path="/">
            <IndexRoute component= {App}/>
        </Route>
    </Router>
) 

export default routes;