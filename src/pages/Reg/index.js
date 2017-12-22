import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import {post} from '../../api/index';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {username: '', password: '', error: ''};
    }

    reg = () => {
        let username = this.username.value;
        let password = this.password.value;
        post('/api/reg',
            {
                username,
                password
            }).then(res => {
            if (res.code === 0) {
                this.props.history.push('/login');
            } else {
                this.setState({error: res.error});
            }
        });
    };

    render() {
        return (
            <div>
                <Mheader title="注册"/>
                <div className="login-panel">
                    <div className="login-logo">
                        <img src={require('../../common/images/2.jpg')} alt=""/>
                    </div>
                    <input ref={input => this.username = input} type="text" placeholder="手机号"/>
                    <input ref={input => this.password = input} type="text" placeholder="密码"/>
                    <div onClick={this.reg} className="login-button">注&nbsp;册</div>
                    {
                        this.state.error && <div className='tips'>{this.state.error}</div>
                    }
                </div>
            </div>
        );
    }
}