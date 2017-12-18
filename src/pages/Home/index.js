import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import Sliders from "../../components/Sliders";

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Mheader title='美妆'/>
                <Sliders/>
            </div>
        );
    }
}
