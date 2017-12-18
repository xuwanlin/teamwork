import React, {Component} from 'react';
import './index.less';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Tab from "../../components/Tab";
import Shop from "../Shop";
import Brand from "../Brand";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route  path='/shop' component={Shop}/>
                        <Route  path='/brand/:id' component={Brand}/>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}

