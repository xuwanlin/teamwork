import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import {get,myDelete} from '../../api/index';
import Unlogin from './Unlogin';
import Login from './Login';
import Remove from './Remove';
export default class PersonCenter extends Component {
    remove = () => {
        get('/api/logout').then(res => {
            if (res.code === 1) {
                localStorage.removeItem('vip');
                this.props.history.push('/');
            }
        });
    }
    constructor(){
        super();
        this.state = {username:''}
    }
    componentDidMount() {
        get('/api/validate').then(res => {
            console.log(res);
            if (res.code === 0) {
                this.setState({username:res.user});
            }else{
               // this.props.history.push('/')
                this.setState({username:''});
            }
        });
    }
    render() {
        console.log(!!localStorage.getItem('vip'));
        return (
            <div className='person-center'>
                <Mheader title='我的'/>
                <div className="person-head">
                    <img src="../../../server/static/personal-center-bg.png" alt=""/>
                    { !localStorage.getItem('vip')  ?<Unlogin/>:<Login/>}
                </div>
                <div className="person-order">
                    <ul>
                        <li>
                            <p className="order-i">
                                <span>
                                    <i className="iconfont icon-daishouhuo"></i>
                                </span>
                            </p>
                            <p className="order-text"  onClick={this.remove}>
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
                    {localStorage.getItem('vip') === '' ?'':<Remove />}
            </div>
        );
    }
}