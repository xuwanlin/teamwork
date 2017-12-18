import React, {Component} from 'react';
import './index.less';
import {get, post} from "../../../api";

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

    handleChange = (event, ele) => {
        let count = event.target.value;
        let list = this.state.list.map(item => {
            if (item == ele) {
                item.count = count;
            }
            return item;
        });
        console.log(ele.id,count);
        this.setState({list}, () => {
            post('/api/car', {id: ele.id, count}).then(res => console.log(res));
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
                                <div className='input'><input type="checkbox"/></div>
                                <div className='img'><img src={item.image} alt=""/></div>
                                <div className='title'>{item.title}</div>
                                <div className='num'>
                                    <button>+</button>
                                    <input type="text" onChange={(event) => this.handleChange(event, item)}
                                           value={item.count}/>
                                    <button>-</button>
                                </div>
                                <div className='set'>
                                    <button>X</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
