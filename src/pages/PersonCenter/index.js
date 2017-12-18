import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
export default class PersonCenter extends Component {
    render() {
        return (
            <div className='person-center'>
                <Mheader title='我的'/>
                <div className="person-head">
                    <img src="../../../server/static/personal-center-bg.png" alt=""/>
                    <div className="person-login">
                        <span>登&nbsp;录</span>
                        <span></span>
                        <span>注&nbsp;册</span>
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