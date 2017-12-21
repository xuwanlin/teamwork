import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import {get} from '../../../api/index';
import {LazyImg} from "../../../utils";

export default class HomeList extends Component {
    constructor() {
        super();
        this.state = {imgs: []};
    }

    componentDidMount() {
        get('/api/category').then(res => {
            if (res.code === 0) {
                let imgs = res.categorys;
                this.setState({imgs},LazyImg(this.image,res.categorys));
            }
        });
    }


    render() {
        return (
            <div className="home-lists" ref={image=>this.image=image}>
                <div className="home-hotSale">今日特卖 · 每天早10点 晚8点上新</div>
                {
                    this.state.imgs.map(item => (
                        <div className="home-list" key={item.category}>
                            <div className="home-images" >
                                <Link to={`/brand/${item.category}`}>
                                    <img className="home-img"
                                         data-src={item.topicCover}/>
                                </Link>
                            </div>
                            <div className="home-text">
                                <p>{item.topicTitle}</p>
                                <p>{item.activeTime}</p>
                            </div>
                            <div className="home-discount">{item.discount}</div>
                        </div>
                    ))
                }

            </div>
        );
    }
}
