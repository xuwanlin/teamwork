import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import {post} from '../../api/index';
import {Link} from "react-router-dom";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {username: '', password: '', error: ''};
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
                localStorage.setItem('vip', JSON.stringify(res.user));
                this.props.history.push('/profile');
            } else {
                this.setState({error: res.error});
            }
        });
    };

    render() {
        return (
            <div>
                <Mheader title="登录"/>
                <div className="login-panel">
                    <div className="login-logo">
                        <img src={require('../../common/images/2.jpg')} alt=""/>
                    </div>
                    <input ref={input => this.username = input} type="text" placeholder="手机号"/>
                    <input ref={input => this.password = input} type="text" placeholder="密码"/>
                    <div onClick={this.login} className="login-button">登&nbsp;录</div>
                    <div className='box'>
                        {
                            this.state.error && <div className='tips'>{this.state.error}</div>
                        }
                        <Link className='toLogin' to='/login'>去登录</Link>
                    </div>
                </div>
            </div>
        );
    }
}