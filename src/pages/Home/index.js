import React, {Component} from 'react';
import './index.less';
import Mheader from "../../components/Mheader";
import Sliders from "../../components/Sliders";
import Top5 from "./Top5";

export default class Home extends Component {
    com
    render() {
        return (
            <div className='home'>
                <Mheader title='美妆'/>
                <Sliders/>
                <Top5/>
            </div>
        );
    }
}
