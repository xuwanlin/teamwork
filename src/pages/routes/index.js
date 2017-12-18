import React, {Component} from 'react';
import './index.less';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Tab from "../../components/Tab";
import PersonCenter from "../PersonCenter/index";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/profile' component={PersonCenter}/>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}

