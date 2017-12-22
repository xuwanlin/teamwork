import React, {Component} from 'react';
import './index.less';

export default class Loading extends Component {
    render() {
        return (
            <div className='my-loading'>
                <div className="loader1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}
