import React, {Component} from 'react';
import './index.less';
import {get, post, myDelete} from "../../../api";

export default class ShopCar extends Component {
    constructor() {
        super();
        this.state = {list: []};
    }

    componentDidMount() {
        get('/api/car').then(res => {
            this.setState({list: res.cart.list});
        });
    }

    handleChange = (event, ele, step) => {
        let num = step || 0;
        let count = parseInt(ele.count) + num;
        if (count < 1) count = 1;
        let list = this.state.list.map(item => {
            if (item == ele) {
                item.count = count;
            }
            return item;
        });
        this.setState({list}, () => {
            post('/api/car', {id: ele.id, count}).then(res => console.log(res));
        });
    };
    removeGood = (id) => {
        myDelete('/api/car', {id}).then(res => {
            if (res.code == 0) {
                let list = this.state.list.filter(item => item.id != id);
                this.setState({list});
            }
        });
    };

    render() {
        return (
            <div className='shopcar-list'>
                <h3><input type="checkbox"/>全选/取消</h3>
                <ul className='car-list'>
                    {
                        this.state.list.map(item => (
                            <li key={item.id}>
                                <div className='input'><input type="checkbox"/>{item.id}</div>
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
            </div>
        );
    }
}
