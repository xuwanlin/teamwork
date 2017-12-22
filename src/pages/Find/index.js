import React, {Component} from 'react';
import './index.less';
import {get, post} from "../../api";
import {Link} from 'react-router-dom';
import {upLoadMore, downRefresh} from '../../utils';
import Loading from "../../components/Loading";

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
        let keyword = this.props.match.params.keyword || '';
        get(`/api/categorysAll?offset=${offset}&limit=${limit}&type=${type}&keyword=${keyword}`).then(res => {
            if (res.code === 0) {
                let list = [...this.state.list, ...res.data.list];
                this.setState({list, offset: this.state.offset + res.data.total, hasMore: res.data.hasMore});
            }
        });
    };

    freshData = (offset, limit, type) => {
        let keyword = this.props.match.params.keyword || '';

        get(`/api/categorysAll?offset=${offset}&limit=${limit}&type=${type}&keyword=${keyword}`).then(res => {
            console.log(res);
            if (res.code === 0) {
                let list = [...res.data.list, ...this.state.list];
                this.setState({list, offset: this.state.offset + res.data.total, hasMore: res.data.hasMore});
            }
        });
    };

    handlePost = (id) => {
        post(`/api/car`, {id}).then(res => {
            if (res.code === 1) {
                this.props.history.push('/login');
            } else {
                this.layer();
            }
        });
    };
    layer = () => {
        let odiv = document.createElement('div');
        odiv.className = 'layerBox';
        odiv.innerHTML = '<span>+</span>';
        document.body.appendChild(odiv);
        setTimeout(() => {
            odiv.classList.add('stop');
        }, 50);
        setTimeout(() => {
            document.body.removeChild(odiv);
        }, 500);
    };
    ChangeSort = (offset, limit, type) => {
        get(`/api/categorysAll?offset=${offset}&limit=${limit}&type=${type}`).then(res => {
            if (res.code === 0) {
                let list = res.data.list;
                this.setState({
                    list,
                    offset: this.state.offset + res.data.total,
                    hasMore: res.data.hasMore,
                    type
                });
            }
        });
    };
    handleSort = (e) => {
        if (/tag/.test(e.target.className)) {
            let type = this.state.type;
            switch (e.target.getAttribute('data-info')) {
                case 'price':
                    type === 0 ? this.ChangeSort(0, 6, 1) : this.ChangeSort(0, 6, 0);
                    break;
                case 'safe':
                    type === 2 ? this.ChangeSort(0, 6, 3) : this.ChangeSort(0, 6, 2);
                    break;
                case 'mark':
                    type === 4 ? this.ChangeSort(0, 6, 5) : this.ChangeSort(0, 6, 4);
                    break;
                default:
                    return;
            }
        }
    };

    render() {
        return (
            <div className='find-area' ref={content => this.content = content}>
                <Loading/>
                <div className='find-title' onClick={this.handleSort}><span>筛选</span>
                    <span className={(this.state.type === 0 || this.state.type === 1) ? 'tag active' : 'tag'}
                          data-info="price">价格
                        {
                            this.state.type === 1 && <i className='iconfont icon-jiantou'></i>
                        }
                        {
                            this.state.type === 0 && <i className='iconfont icon-up'></i>
                        }
                    </span>
                    <span className={(this.state.type === 2 || this.state.type === 3) ? 'tag active' : 'tag'}
                          data-info="safe">折扣
                        {
                            this.state.type === 3 && <i className='iconfont icon-jiantou'></i>
                        }
                        {
                            this.state.type === 2 && <i className='iconfont icon-up'></i>
                        }
                    </span>
                    <span className={(this.state.type === 4 || this.state.type === 5) ? 'tag active' : 'tag'}
                          data-info="mark">销量
                        {
                            this.state.type === 5 && <i className='iconfont icon-jiantou'></i>
                        }
                        {
                            this.state.type === 4 && <i className='iconfont icon-up'></i>
                        }
                    </span>
                </div>
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
                                    <span>销量:{item.sales}</span>
                                </div>
                                <div className='add-car'>
                                    <button ref={btn => this.addCart = btn}
                                            onClick={() => this.handlePost(item.id)}>加入购物车
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {
                    !this.state.hasMore ? <div className='downLoad-tips'>别扯了,到底了</div> : <Loading/>
                }
            </div>
        );
    }
}
