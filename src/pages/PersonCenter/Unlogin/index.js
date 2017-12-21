import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class Unlogin extends Component {
    render() {
        return (
            <div className="person-unlogin">
                <span><Link to="/login">登&nbsp;录</Link></span>
                <span></span>
                <span><Link to="/reg">注&nbsp;册</Link></span>
            </div>
        )
    }
}