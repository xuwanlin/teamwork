import React, {Component} from 'react';
import './index.less';
import Mheader from '../../components/Mheader';
import {Link} from 'react-router-dom'
export default class Address extends Component {
    render() {
        return (
            <div>
                <Mheader title="收货地址"/>
                <div className="address">
                    <Link to={'/addressList'}><p><span>添加收货地址</span></p></Link>
                </div>
            </div>
        )
    }
}