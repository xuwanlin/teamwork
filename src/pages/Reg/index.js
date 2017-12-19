import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import {post} from '../../api/index';
export default class Login extends Component {
    constructor(){
        super();
        this.state = {username:'',password:''}
    }
    reg = () => {
        let username = this.username.value;
        let password = this.password.value;
        post('/api/reg',
        {
            body:
            {
                username,
                password
            }
        }).then(res => {
            if (res.code === 0) {
                window.location.href = "/#/login";
            }
        });
    }
    render() {
        return (
            <div className="login-panel">
                <Mheader title="注册"/>
                <div className="login-logo">
                    <img src="../../../server/static/imgLink/Login/1.jpg" alt=""/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="手机号"/>
                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <div onClick={this.reg} className="login-button">注&nbsp;册</div>
            </div>
        )
    }
}