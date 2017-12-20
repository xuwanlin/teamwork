import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import {post} from '../../api/index';
import { browserHistory } from 'react-router';
export default class Login extends Component {
    constructor(){
        super();
        this.state = {username:'',password:''}
    }
       login = () => {
           let username = this.username.value;
           let password = this.password.value;
           post('/api/login',
               {
                 username,
                 password
               }).then(res => {
               if (res.code === 0) {
                   localStorage.setItem('vip',JSON.stringify(res.user));
                   window.location.href = "/#/profile";
               }
           });
       }
    render() {
        return (
            <div className="login-panel">
                <Mheader title="登录"/>
                <div className="login-logo">
                    <img src="../../../server/static/imgLink/Login/1.jpg" alt=""/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="手机号"/>
                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <div onClick={this.login} className="login-button">登&nbsp;录</div>
            </div>
        )
    }
}