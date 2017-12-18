import React, {Component} from 'react';
import './index.less';
import {get} from '../../api/index';

export default class Brand extends Component {
    constructor() {
        super();
        this.state = {list: []};
    }

    componentDidMount() {
        get(`/api/categorys/${this.props.match.params.id}`).then(res => {
            if (res.code == 0) {
                this.setState({list: res.category.list});
            }
        });
    }

    render() {
        return (
            <div className='brand-box'>
                <div>标题</div>
                <ul className="brand-list">
                    {
                        this.state.list.map(item => (
                            <li key={item.id}>
                                <div className='photo'><img src={item.image}/></div>
                                <div className='title'>{item.title}</div>
                                <div className='price'>
                                    <div className='sale'>{item.discount}</div>
                                    <span>{item.price}</span>
                                    <del>{item.makePrice}</del>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
