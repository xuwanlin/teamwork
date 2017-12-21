import React, {Component} from 'react';
import './index.less';
import {get} from '../../api/index';
import Mheader from '../../components/Mheader/index';
import {Link} from 'react-router-dom';

export default class Brand extends Component {
    constructor() {
        super();
        this.state = {list: [], title: '',picture:[]};
    }

    componentDidMount() {
        get(`/api/categorys/${this.props.match.params.id}`).then(res => {
            console.log(res.category.picture);
            if (res.code == 0) {
                this.setState({
                    list: res.category.list,
                    title: res.category.topicTitle,
                    picture:res.category.picture
                });
            }
        });
        console.log(this.state.picture);
    }

    render() {
        console.log(this.state.picture);
        return (
            <div className='brand-box'>
                <Mheader title={this.state.title}/>
                <div className="brand-picture">
                    {
                        this.state.picture.map((item,index)=>(
                            <img src={item} alt="" key={index}/>
                        ))
                    }
                </div>
                <ul className="brand-list">
                    {
                        this.state.list.map(item => (
                            <li key={item.id}>
                                <Link to={`/detail/${item.id}`}>
                                    <div className='photo'><img src={item.image}/></div>
                                    <div className='title'>{item.title}</div>
                                    <div className='price'>
                                        <div className='sale'>{item.discount}</div>
                                        <span>{item.price}</span>
                                        <del>{item.makePrice}</del>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
