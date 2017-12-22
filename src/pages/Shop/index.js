import React, {Component} from 'react';
import Mheader from '../../components/Mheader/index';
import {get} from '../../api/index';
import ShopCar from "./ShopCar";
import './index.less';

export default class Shop extends Component {


    render() {

        return (
            <div className='shop-car'>
                <Mheader title='购物车'/>
                <ShopCar/>
            </div>
        );
    }
}
