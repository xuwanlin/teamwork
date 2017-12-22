import React, {Component} from 'react';
import './index.less';
import Mheader from '../../components/Mheader';
import {get,post,myDelete} from '../../api/index';
import './index.less'
import {Link} from 'react-router-dom';
export default class Orders extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      allPrice: 0.00,
      allNum:0
    }
  }

  componentDidMount() {
    get('/api/order').then(res => {
      if (res.code === 0) {
        this.setState({lists: res.order.list});
        this.setState({allPrice: this.computedTotalPrice(this.state.lists)});
        this.setState({allNum: this.computedAllNum(this.state.lists)});
      } else {
        this.setState({lists: ''})
      }
    })
  }
  computedAllNum = (count) => {
    let addNum = 0;
    count.forEach(item => {
      addNum +=item.count
    });
    return addNum;
  }
  computedTotalPrice = (list) => {
    let totalPrice = 0.00;
    list.forEach(item => {
      totalPrice += item.price * item.count - 30;
    });
    return totalPrice;
  };

  render() {
    return (
    <div
    className="order-box">
      <Mheader title='全部订单'/>
      <div className="orders">
        <div className="order-top">
          <p><span>常购清单</span><span className="right">{this.state.allNum}件</span></p>
        </div>
        {
          this.state.lists.map(item => (
          <Link to={`/orderslist/${item.id}`} key={item.id}>
          <div className="order-list">
            <div className="order-listImg">
              <img src={item.image}
                   alt=""/>
            </div>
            <div className="order-listTip">
              <p><span>{item.title}</span><span className="right order-price">￥{item.price}</span></p>
              <p><span>{item.size}</span><span className="right">x{item.count}</span></p>
            </div>
            <div className="allPrices">
              <p><span>共{item.count}件商品</span><span>实付￥{this.state.allPrice}</span></p>
            </div>
          </div>
          </Link>
          ))
        }
      </div>
      <div className="submit">
        <p><span>货到付款</span></p>
      </div>
    </div>
    )
  }
}
