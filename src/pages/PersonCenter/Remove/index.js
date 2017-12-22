import React, {Component} from 'react';
import './index.less'
import {get} from "../../../api";
export default class Remove extends Component {
  remove = () => {
    get('/api/logout').then(res => {
      if (res.code === 1) {
        localStorage.removeItem('vip');
        window.location.href = "/#/";
      }
    });
  }
    render() {
        return (
            <div>
                <div className="remove" onClick={this.remove}>
                    <span>退出登录</span>
                </div>
            </div>
        )
    }
}