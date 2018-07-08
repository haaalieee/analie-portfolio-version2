import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import App from '../App';
import Faq from './Faq';

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>    
        <Route path ="/faq" component={Faq} />
    </Switch>
    </BrowserRouter>
)

export default Router;