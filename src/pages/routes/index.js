import React, {Component} from 'react';
import './index.less';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Tab from "../../components/Tab";
import PersonCenter from "../PersonCenter/index";
import Shop from "../Shop";
import Brand from "../Brand";
import Login from "../Login";
import Reg from "../Reg"

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/profile' component={PersonCenter}/>
                        <Route  path='/shop' component={Shop}/>
                        <Route  path='/brand/:id' component={Brand}/>
                        <Route  path='/login' component={Login}/>
                        <Route  path='/reg' component={Reg}/>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}

