import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

export default class Tab extends Component {
    render() {
        return (
            <nav className="tab-nav">
                <NavLink exact to="/">
                    <span>首页</span>
                </NavLink>
                <NavLink to="/find">
                    <span>发现</span>
                </NavLink>
                <NavLink to="/shop">
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/profile">
                    <span>我的</span>
                </NavLink>
            </nav>
        );
    }
}