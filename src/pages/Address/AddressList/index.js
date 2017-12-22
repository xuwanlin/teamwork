import React, {Component} from 'react';
import './index.less';
import Mheader from '../../../components/Mheader';
import {post} from '../../../api'
export default class AddressList extends Component {
    constructor(){
        super();
        this.state = {name:'',mobile:'',address:'',email:''}
    }
    SubmitOk = () => {
        let name = this.name.value;
        let mobile = this.mobile.value;
        let address = this.address.value;
        let email = this.email.value;
        post('/api/user',{name,mobile,address,email}).then(res => {
            if (res.code === 0) {
                window.location.href = "/#/profile";
            }
        });
    }
    render() {
        return (
            <div className="mark">
                <Mheader title="修改收货地址"/>
                <div className="ul-one">
                    <ul>
                        <li><label>姓名</label><input ref={input=>this.name=input} type="text" className="list-name"/></li>
                        <li><label>电话</label><input ref={input=>this.mobile=input} type="text" className="list-phone"/></li>
                        <li><label>邮箱地址</label><input ref={input=>this.email=input} type="text" className="list-email"/></li>
                    </ul>
                </div>
                <div className="ul-two">
                    <ul>
                        <li>
                            <label>收货地址</label>
                            <textarea ref={textarea=>this.address=textarea}></textarea></li>
                    </ul>
                </div>
                <div className="ok" onClick={this.SubmitOk}>
                    <span>确定</span>
                </div>
            </div>
        )
    }
}