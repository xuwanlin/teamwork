import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import Mheader from "../../components/Mheader";
import {get} from '../../../api/index';
export default class PersonCenter extends Component {
    componentDidMount() {
        get('/api/login').then(res => {
            if (res.code == 0) {
                p
            }
        });
    }
    render() {
        return (
            <div className='person-center'>
                <Mheader title='我的'/>
                <div className="person-head">
                    <img src="../../../server/static/personal-center-bg.png" alt=""/>
                    <div className="person-login">
                        <span><Link to="/login">登&nbsp;录</Link></span>
                        <span></span>
                        <span><Link to="/reg">注&nbsp;册</Link></span>
                    </div>
                </div>
                <div className="person-order">
                    <ul>
                        <li>
                            <p className="order-i">
                                <span>
                                    <i className="iconfont icon-daishouhuo"></i>
                                </span>
                            </p>
                            <p className="order-text">
                                <span>代付款</span>
                            </p>
                        </li>
                        <li>
                            <p className="order-i">
                                <span>
                                    <i className="iconfont icon-daishouhuo"></i>
                                </span>
                            </p>
                            <p className="order-text">
                                <span>代付款</span>
                            </p>
                        </li>
                        <li>
                            <p className="order-i">
                                <span>
                                    <i className="iconfont icon-daishouhuo"></i>
                                </span>
                            </p>
                            <p className="order-text">
                                <span>代付款</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="person-mnue">
                    <ul>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                            <p><span className="left">全部订单</span><span className="right">></span></p>
                        </li>
                        <li>
                        <p><span className="left">全部订单</span><span className="right">></span></p>
                    </li>


                    </ul>
                </div>
            </div>
        );
    }
}