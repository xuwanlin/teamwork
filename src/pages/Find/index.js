import React, {Component} from 'react';
import './index.less';
import {get} from "../../api";

export default class Find extends Component {
    constructor() {
        super();
        this.state = {list: []};
    }

    componentDidMount() {
        get('/api/categorysAll').then(res => {
            if (res.code === 0) {
                this.setState({list: res.list});
            }
        });
    }

    render() {
        return (
            <div className='find-area'>
                <div className='find-title'>筛选</div>
                <ul className='productList'>
                    {
                        this.state.list.map(item => (
                            <li key={item.id}>
                                <div className='photo'><img src={item.image} alt={item.title}/></div>
                                <div className='title'>{item.title}</div>
                                <div className='price'>
                                    <b>{item.price}</b>
                                    <del>{item.makePrice}</del>
                                </div>
                                <div className='add-car'>
                                    <button>加入购物车</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
