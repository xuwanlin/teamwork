import React, {Component} from 'react';
import './index.less';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Tab from "../../components/Tab";
import PersonCenter from "../PersonCenter/index";
import Shop from "../Shop";
import Brand from "../Brand";
import Find from "../Find";
import Detail from "../Detail";
import Login from "../Login";
import Reg from "../Reg";
import Address from "../Address";
import AddressList from "../Address/AddressList";
import OrdersList from "../Orders/OrdersList/index";
import Orders from "../Orders/index";


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/shop' component={Shop}/>
                        <Route path='/find' component={Find}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route exact path='/profile' component={PersonCenter}/>
                        <Route path='/brand/:id' component={Brand}/>
                        <Route  path='/login' component={Login}/>
                        <Route  path='/reg' component={Reg}/>
                        <Route  path='/address' component={Address}/>
                        <Route  path='/addressList' component={AddressList}/>
                        <Route  path='/orders' component={Orders}/>
                        <Route  path='/orderslist/:id' component={OrdersList}/>
                    </Switch>
                    <Tab/>
                </div>
            </Router>
        );
    }
}

