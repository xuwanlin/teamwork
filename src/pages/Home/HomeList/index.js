import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import {get} from '../../../api/index';

export default class HomeList extends Component {
    constructor() {
        super();
        this.state = {imgs: []};
    }

    componentDidMount() {
        get('/api/category').then(res => {
            if (res.code == 0) {
                let imgs = res.categorys;
                this.setState({imgs});
            }
        });
    }


    render() {
        return (
            <div className="home-lists">
                <div>今日特卖 · 每天早10点 晚8点上新</div>
                {
                    this.state.imgs.map(item => (
                        <div className="home-list" key={item.category}>
                            <div className="home-images">
                                <Link to={`/brand/${item.category}`}>
                                    <img className="home-img"
                                         src={item.topicCover}/>
                                </Link>
                            </div>
                            <div className="home-text">
                                <p>{item.topicTitle}</p>
                                <p>{item.activeTime}</p>
                            </div>
                            <div>{item.discount}</div>
                        </div>
                    ))
                }

            </div>
        );
    }
}
