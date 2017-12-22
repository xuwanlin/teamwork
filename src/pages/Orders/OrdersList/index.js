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
    get(`/api/product/${this.props.match.params.id}`).then(res => {
      if (res.code === 0) {
        this.setState({product:res.product});
      }
    })
  }
  render() {
    let {id,category=1,title,image,discount,price,makePrice=0,slider,size,describe=[]}= this.state.product;
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
          <div className="order-list">
            <p className="order-shop"><span>商品信息</span></p>
            <ul>
                <li className="orders-list">
                  <div className="list-top">
                    <div className="list-img">
                      <img
                      src={image}
                      alt=""/>
                    </div>
                    <div className="list-title">
                      <p><span className="title">{title}</span><span className="price">{price}</span></p>
                      <p ><span className="size">{size}</span><span className="num">x1</span></p>
                    </div>
                  </div>
                    <div className="list-order">
                      <p><span>运费</span><span className="right">￥0.00</span></p>
                      <p><span>活动优惠</span><span className="right">-￥{!makePrice?0:makePrice}</span></p>
                    </div>
                </li>
            </ul>
          </div>
      </div>
      <div className="unpay">
        <p><span>已支付</span><span className="right">￥{(price)-makePrice}</span></p>
      </div>
    </div>
    )
  }
}
