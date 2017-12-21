import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

export default class Tab extends Component {
    render() {
        return (
            <nav className="tab-nav">
                <NavLink exact to="/">
                    <span className="iconfont icon-home"></span>
                </NavLink>
                <NavLink to="/find">
                    <span className="iconfont icon-faxian"> </span>
                </NavLink>
                <NavLink to="/shop">
                    <span className="iconfont icon-icon1"></span>
                </NavLink>
                <NavLink to="/profile">
                    <span className="iconfont icon-home1"></span>
                </NavLink>
            </nav>
        );
    }
}