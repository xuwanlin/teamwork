import React, {Component} from 'react';
import './index.less';
import Mheader from '../../../components/Mheader';
import {get,post,myDelete} from '../../../api/index';
import './index.less'
import {Link} from 'react-router-dom';
export default class OrdersList extends Component {
  constructor() {
    super();
    this.state = {product:{}}
  }
  componentDidMount() {
    get(`/api/order?id=${this.props.match.params.id}`).then(res => {
      if (res.code === 0) {
        this.setState({product:res.product});
      }
    })
  }
  render() {
    return (
    <div className="order-box">
      <Mheader title='订单详情'/>
        <div className="orders">
            <div className="orderAd">
                <p><span>收货地址</span></p>
                <p><span>hello</span><span className="right">17301308426</span></p>
                <p><span>北京市，昌平区，东大街</span></p>
                <p><span>送货时间不限</span></p>
            </div>

        </div>
    </div>
    )
  }
}
