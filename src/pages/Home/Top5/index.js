import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less';
import {get} from '../../../api/index';

export default class Top5 extends Component {
    constructor() {
        super();
        this.state = {title: '', imgList: []};
    }

    componentDidMount() {
        get(`/api/imglink?file=top`).then(res => {
            if (res.code === 0) {
                this.setState({
                    title: res.list.title,
                    imgList: res.list.imgList
                });
            }
        });
    }

    render() {
        return (
            <div className='home-top5'>
                <div className='title'><img src={this.state.title}/></div>
                <ul>
                    {
                        this.state.imgList.map((item, index) => (
                            <li key={index}><Link to={`/brand/${item.link}`}><img src={item.src}/></Link></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}