import React, {Component} from 'react';
import './index.less';
import {get, post, myDelete} from "../../../api";
import {Link} from "react-router-dom";

export default class ShopCar extends Component {
    constructor() {
        super();
        this.state = {list: [], totalPrice: 0.00};
    }

    componentDidMount() {
        get('/api/car').then(res => {
            if (res.code === 0) {
                this.setState({list: res.cart.list, totalPrice: this.computedTotalPrice(res.cart.list)});
            }
        });
    }

    handleChange = (event, ele, step) => {
        let num = step || 0;
        let count = parseInt(ele.count) + num;
        if (count < 1) count = 1;
        let check = ele.isSelected;
        if (event.target.type === 'checkbox') {
            check = !ele.isSelected;
        }
        let list = this.state.list.map(item => {
            if (item == ele) {
                item.count = count;
                item.isSelected = check;
            }
            return item;
        });
        this.setState({list, totalPrice: this.computedTotalPrice(list)}, () => {
            post('/api/car', {id: ele.id, count, isSelected: Number(check)}).then(res => console.log(res));
        });
    };
    removeGood = (id) => {
        myDelete('/api/car', {id}).then(res => {
            if (res.code == 0) {
                let list = this.state.list.filter(item => item.id != id);
                this.setState({list, totalPrice: this.computedTotalPrice(list)});
            }
        });
    };
    // 切换全选 和 全不选
    switchAllSelected = (event) => {
        let flag = Number(event.target.checked);
        let _newList = this.state.list.map(item => {
            item.isSelected = flag;
            return item;
        });
        console.log(flag, _newList);
        this.setState({list: _newList, totalPrice: this.computedTotalPrice(_newList)}, () => {
            post('/api/car', {allSelect: flag}).then(res => console.log(res));
        });
    };
    computedTotalPrice = (list) => {
        let totalPrice = 0.00;
        list.forEach(item => {
            if (item.isSelected) {
                totalPrice += item.price * item.count;
            }
        });
        return totalPrice;
    };

    render() {
        return (
            <div className='shopcar-list'>
                <h3>
                    <label><input type="checkbox"
                                  checked={this.state.list.every(item => item.isSelected)}
                                  onChange={(event) => this.switchAllSelected(event)}
                    />全选/全不选
                    </label>
                </h3>
                <ul className='car-list'>
                    {
                        this.state.list.map(item => (
                            <li key={item.id}>
                                <div className='input'><input type="checkbox"
                                                              checked={item.isSelected}
                                                              onChange={(event) => this.handleChange(event, item)}
                                /></div>
                                <div className='img-box'>
                                    <Link to={`/detail/${item.id}`}> <img src={item.image} alt=""/></Link>
                                </div>
                                <div className='text-area'>
                                    <h4 className='title'><Link to={`/detail/${item.id}`}>{item.title}</Link></h4>
                                    <div className='num'>
                                        <div className='price'>{item.price}</div>
                                        <button onClick={(event) => this.handleChange(event, item, -1)}>-</button>
                                        <input type="text" onChange={(event) => this.handleChange(event, item)}
                                               value={item.count < 1 ? 1 : item.count}/>
                                        <button onClick={(event) => this.handleChange(event, item, 1)}>+</button>
                                    </div>
                                    <div className='set'>
                                        <button onClick={() => this.removeGood(item.id)}>X</button>
                                    </div>
                                </div>

                            </li>
                        ))
                    }
                </ul>
                {
                    this.state.list.length > 0 ? <div>
                        总计: <b>{this.state.totalPrice}元</b>
                        <button>去结算</button>
                    </div> : <div className='tips'>请先<Link to='/login'>登录</Link></div>
                }
            </div>
        );
    }
}
