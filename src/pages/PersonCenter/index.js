import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import {get,myDelete} from '../../api/index';
import Unlogin from './Unlogin';
import Login from './Login';
import {Link} from 'react-router-dom';
import Remove from './Remove';
export default class PersonCenter extends Component {
remove = () => {
    get('/api/logout').then(res => {
        if (res.code === 1) {
        localStorage.removeItem('vip');
        this.props.history.push('/')
        }
    });
}
constructor(){
    super();
    this.state = {username:''}
}
componentDidMount() {
    get(' http://localhost:3000/api/validate').then(res => {
    if (res.code === 0) {
        this.setState({username:res.user});
    }else{
        this.setState({username:''});
    }
    });
}
render() {
return (
<div className='person-center'>
<Mheader title='我的'/>
<div className="person-head">
<img src={require('../../common/images/login-bg.png')} alt=""/>
{ !localStorage.getItem('vip')?<Unlogin/>:<Login/>}
</div>
<div className="person-order">
<ul>
    <li>
        <p className="order-i">
            <span>
                <i className="iconfont icon-pay"></i>
            </span>
        </p>
        <p className="order-text" onClick={this.remove}>
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
                <i className="iconfont icon-dingdan"></i>
            </span>
        </p>
        <p className="order-text">
            <span>订单</span>
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
      <Link to={!localStorage.getItem('vip')?'/login':'/address'}>
        <p>
          <span className="left">收货地址</span><span className="right">></span>
        </p>
      </Link>
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