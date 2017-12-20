import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import Sliders from "../../components/Sliders";
import Top5 from "./Top5";
import HomeList from "./HomeList";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {isShow: false};
    }


    render() {
        return (
            <div className='home'>
                <div className='header-logo'>
                    <div className='logo'><img src={require('../../common/images/vip.png')}/></div>
                    <div className='adress'
                         onClick={() => this.setState({isShow: true}, () => this.search.style.top = 0)}>北京
                        <i className='iconfont icon-down-trangle'></i>
                    </div>
                    <div className='search'><input type="text" placeholder='12.24圣诞狂欢'/></div>
                    <div className='my-profile' onClick={() => this.props.history.push('/profile')}><i
                        className='iconfont icon-home1'></i></div>
                </div>
                <Sliders/>
                <Top5/>
                <HomeList/>
                <div className='searchBox' ref={search => this.search = search}>
                    <div className='layer-title'><i className='iconfont icon-cuowu'
                                                    onClick={() => this.setState({isShow: false}, () => this.search.style.top = "100%")}/><span>选择收货地址</span>
                    </div>
                </div>
            </div>
        );
    }
}
