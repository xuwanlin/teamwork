import React, {Component} from 'react';
import './index.less';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Tab from "../../components/Tab";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}

