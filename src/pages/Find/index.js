import React, {Component} from 'react';
import './index.less';
import {get, post} from "../../api";
import {Link} from 'react-router-dom';
import {upLoadMore, downRefresh} from '../../utils';

export default class Find extends Component {
    constructor() {
        super();
        this.state = {list: [], offset: 0, limit: 6, type: null, hasMore: true};
    }

    componentDidMount() {
        this.getData(this.state.offset, this.state.limit, this.state.type);
        upLoadMore(this.content, () => {
            if (this.state.hasMore) {
                this.getData(this.state.offset, this.state.limit, this.state.type);
            }
        });
        downRefresh(this.content, () => {
            if (this.state.hasMore) {
                this.freshData(this.state.offset, this.state.limit, this.state.type);
            }
        });
    }

    getData = (offset, limit, type) => {
        get(`/api/categorysAll?offset=${offset}&limit=${limit}&type=${type}`).then(res => {
            console.log(res);
            if (res.code === 0) {
                let list = [...this.state.list, ...res.data.list];
                this.setState({list, offset: this.state.offset + res.data.total, hasMore: res.data.hasMore});
            }
        });
    };

    freshData = (offset, limit, type) => {
        get(`/api/categorysAll?offset=${offset}&limit=${limit}&type=${type}`).then(res => {
            console.log(res);
            if (res.code === 0) {
                let list = [...res.data.list, ...this.state.list];
                this.setState({list, offset: this.state.offset + res.data.total, hasMore: res.data.hasMore});
            }
        });
    };

    handlePost = (id) => {
        post(`/api/car?id=${id}`).then(res => {
            console.log(res);
            if (res.code === 1) {
                this.props.history.push('/login');
            }
        });
    };

    render() {
        return (
            <div className='find-area' ref={content => this.content = content}>
                <div className='find-title'>筛选<span>价格</span><span>折扣</span><span>销量</span></div>
                <ul className='productList'>
                    {
                        this.state.list.map(item => (
                            <li key={item.id}>
                                <div className='photo'>
                                    <Link to={`/detail/${item.id}`}><img src={item.image} alt={item.title}/></Link>
                                </div>
                                <div className='title'>{item.title}</div>
                                <div className='price'>
                                    <b>{item.price}</b>
                                    <del>{item.makePrice}</del>
                                </div>
                                <div className='add-car'>
                                    <button onClick={() => this.handlePost(item.id)}>加入购物车</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
