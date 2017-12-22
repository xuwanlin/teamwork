import React, {Component} from 'react';
import './index.less';
import Mheader from '../../components/Mheader';
import {
    get,
    post,
    myDelete
} from '../../api/index';
import {Link} from 'react-router-dom';
import OrderProduct from "./OrderProduct";

export default class Orders extends Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            product: [],
            id: null,
            price: 0.00
        };
    }

    makeDataP = () => {
        for (var data in this.state.lists) {
            let Data = this.state.lists[data].product;
            return Data;
        }
    };
    makePrice = (list) => {
        let ALL = 0.00;
        list.forEach(item => {
            ALL += item.price * item.count;
        });
        return ALL;
    };

    componentDidMount() {
        get('/api/order').then(res => {
            if (res.code === 0) {
                this.setState({lists: res.order.list});
                this.setState({product: this.makeDataP()});
                this.setState({price: this.makePrice(this.state.product)});
            } else {
                this.setState({lists: []});
            }
        });
    }

    render() {
        return (
            <div
                className="order-box">
                <Mheader  title='全部订单'/>
                {
                    this.state.lists.map(item => (
                        <div
                            className="orders" key={item.id}>
                            <div
                                className="order-top">
                                <p>
                                    <span>订单号：{item.id}</span><span
                                    className="right">下单时间{item.date}</span>
                                </p>
                                <OrderProduct
                                    product={this.state.product}/>
                                <div
                                    className="allPrice">
                                    <p>
                                        <span>总价{this.state.price}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    this.state.lists.length==0&&<div className='nothing'>暂无订单<p><Link to='/find'>去购物&gt;</Link></p></div>
                }
                <div
                    className="submit">
                    <p>
                        <span>货到付款</span>
                    </p>
                </div>
            </div>
        );
    }
}
