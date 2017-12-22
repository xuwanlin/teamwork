import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class OrderProduct extends Component {
constructor(){
  super();
}
  render() {
    return (
    <div>
        {
          this.props.product.map(item => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <div className="order-list" key={item.id}>
                <div className="order-listImg">
                  <img src={item.image}
                       alt=""/>
                </div>
                <div className="order-listTip">
                  <p><span>{item.title}</span><span className="right order-price">￥{item.price}</span></p>
                  <p><span>{item.size}</span><span className="right">x{item.count}</span></p>
                </div>
                <div className="allPrices">
                  <p><span>共{item.count}件商品</span></p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    )
  }
}
