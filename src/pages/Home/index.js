import React, {Component} from 'react';
import './index.less';
import Sliders from "../../components/Sliders";
import Top5 from "./Top5";
import HomeList from "./HomeList";
import {Link} from 'react-router-dom'
import {get} from '../../api/index'
import {post} from "../../api";


export default class Home extends Component {
    constructor() {
        super();
        this.state = {isShow: false, adress: '北京',keyValue:''};
    }
    handleClick = (e) => {
        if (e.target.tagName === "SPAN") {
            this.setState({adress: e.target.innerText, isShow: !this.state.isShow}, () => {
                this.search.style.top = "100%";
            });
        }
    };

    render() {
        return (
            <div className='home'>
                <div className='header-logo'>
                    <div className='logo'><img src={require('../../common/images/vip.png')}/></div>
                    <div className='adress'
                         onClick={() => this.setState({isShow: !this.state.isShow}, () => {
                             this.search.style.top = 0;
                         })}>
                        {this.state.adress}
                        <i className='iconfont icon-down-trangle'></i>
                    </div>

                        <div className='search'><input
                            ref={input=>this.input=input}
                            type="text" placeholder='12.24圣诞狂欢'/>
                            <Link to={`/find/`+this.value}>
                                <div className="iconfont icon-fanhui jiantou"> </div>
                            </Link>
                        </div>

                    <div className='my-profile' onClick={() => this.props.history.push('/profile')}><i
                        className='iconfont icon-home1'></i></div>
                </div>
                <Sliders/>
                <Top5/>
                <HomeList/>
                <div className='searchBox' ref={search => this.search = search}>
                    <div className='layer-title'>
                        <i className='iconfont icon-cuowu'
                           onClick={() => this.setState({isShow: false}, () => this.search.style.top = "100%")}/>
                        <span>选择收货地址</span>
                    </div>
                    <div className="layer-address">
                        你当前的收货地址
                    </div>
                    <div className="layer-default">
                        <span>{this.state.adress} </span>
                        <span className='iconfont icon-duihao'></span>
                    </div>
                    <ul onClick={this.handleClick}>
                        <li>
                            <p>A</p>
                            <span>安徽市</span>
                        </li>
                        <li>
                            <p>B</p>
                            <span>北京市</span>
                        </li>
                        <li>
                            <p>C</p>
                            <span>重庆市</span>
                        </li>
                        <li>
                            <p>F</p>
                            <span>福建市</span>
                        </li>
                        <li>
                            <p>G</p>
                            <span>甘肃省</span>
                            <span>广东省</span>
                            <span>广西省</span>
                            <span>贵州省</span>
                        </li>
                        <li>
                            <p>H</p>
                            <span>海南省</span>
                            <span>湖北省</span>
                            <span>河北省</span>
                            <span>河南省</span>
                            <span>湖南省</span>
                        </li>
                        <li>
                            <p>J</p>
                            <span>江苏省</span>
                            <span>江西省</span>
                            <span>吉林省</span>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}
