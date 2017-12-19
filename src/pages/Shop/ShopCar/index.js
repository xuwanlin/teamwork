import React, {Component} from 'react';
import './index.less';
import {get, post, myDelete} from "../../../api";

export default class ShopCar extends Component {
    constructor() {
        super();
        this.state = {list: [], totalPrice: 0.00};
    }

    componentDidMount() {
        get('/api/car').then(res => {
            this.setState({list: res.cart.list, totalPrice: this.computedTotalPrice(res.cart.list)});
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
        console.log(check);
        this.setState({list, totalPrice: this.computedTotalPrice(list)}, () => {
            post('/api/car', {id: ele.id, count, isSelected: check}).then(res => console.log(res));
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
        let flag = event.target.checked;
        let _newList = this.state.list.map(item => {
            item.isSelected = flag;
            return item;
        });
        flag = flag === true ? 1 : 0;
        console.log(flag);
        this.setState({list: _newList, totalPrice: this.computedTotalPrice(_newList)});
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
                                <div className='img-box'><img src={item.image} alt=""/></div>
                                <div className='text-area'>
                                    <h4 className='title'>{item.title}</h4>
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
                <div>
                    总计: <b>{this.state.totalPrice}元</b>
                    <button>去结算</button>
                </div>
            </div>
        );
    }
}
