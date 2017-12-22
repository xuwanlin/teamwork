import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import {get} from '../../api/index';
import Unlogin from './Unlogin';
import Login from './Login';
import {Link} from 'react-router-dom';
import Remove from './Remove';

export default class PersonCenter extends Component {
    constructor() {
        super();
        this.state = {meg: {}};
    }

    componentDidMount() {
        get('api/validate').then(res => {
            if (res.code === 0) {
                this.setState({meg: res.user});

            } else {
                this.setState({meg: ''});
            }
        });
    }

    render() {
        console.log(this.state.meg);
        return (
            <div>
                <Mheader title='我的'/>
                <div className='person-center'>
                    <div className="person-head">
                        <img src={require('../../common/images/login-bg.png')} alt=""/>
                        {!this.state.meg ? <Unlogin/> : <Login megs={this.state.meg}/>}
                    </div>
                    <div className="person-order">
                        <ul>
                            <li>
                                <p className="order-i">
                                    <span>
                                        <i className="iconfont icon-pay"/>
                                    </span>
                                </p>
                                <p className="order-text">
                                    <span>代付款</span>
                                </p>
                            </li>
                            <li>
                                <p className="order-i">
                                    <span>
                                        <i className="iconfont icon-daishouhuo"/>
                                    </span>
                                </p>
                                <p className="order-text">
                                    <span>代收货</span>
                                </p>
                            </li>
                            <li>
                                <Link to={this.state.meg ? '/orders' : '/login'}>
                                    <p className="order-i">
                                        <span>
                                            <i className="iconfont icon-dingdan"/>
                                        </span>
                                    </p>
                                    <p className="order-text">
                                        <span>订单</span>
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="person-mnue">
                        <ul>
                            <li>
                                <Link to={'/orders'}>
                                    <p><span className="left">全部订单</span><span className="right">></span></p>
                                </Link>
                            </li>
                            <li>
                                <Link to={!localStorage.getItem('vip') ? '/login' : '/address'}>
                                    <p>
                                        <span className="left">收货地址</span><span className="right">></span>
                                    </p>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                {this.state.meg ? <Remove/> : ''}
            </div>
        );
    }
}