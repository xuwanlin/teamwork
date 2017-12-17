import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
import {get} from '../../api/index';

export default class Sliders extends Component {
    constructor() {
        super();
        this.state = {swipers: [], index: 0};
    }

    componentDidMount() {
        get('/api/swipers').then(res => {
            if (res.code === 0) {
                this.setState({
                    ...this.state.swipers,
                    swipers: res.swipers
                });
            }
        });
    }

    render() {
        let swipeOptions = {
            auto: 3000,
            continuous: true,
            callback: (index, ele) => {
                this.setState({index});
            }
        };
        let swipe = (
            <ReactSwipe swipeOptions={swipeOptions}>
                {
                    this.state.swipers.map((item, index) => (
                        <img key={index} src={item}/>
                    ))
                }
            </ReactSwipe>
        );
        return (
            <div className='home-slider'>
                {
                    this.state.swipers.length > 0 ? swipe : null
                }
                <div className='slider-dot'>
                    {
                        this.state.swipers.map((item, index) => (
                            <span key={index} className={this.state.index === index ? "active" : null}></span>
                        ))
                    }
                </div>
            </div>
        );
    }
}
