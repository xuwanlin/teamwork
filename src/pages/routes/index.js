import React, {Component} from 'react';
import './index.less';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Tab from "../../components/Tab";
import ShopCar from "../Shop";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route  path='/shop' component={ShopCar}/>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}

