import React, {Component} from 'react';
import './index.less';
import {withRouter} from 'react-router-dom';

class Mheader extends Component {
    render() {
        return (
            <div className='mheader-toback'>
                <i className='iconfont icon-fanhui' onClick={this.props.history.goBack}></i>
                {this.props.title}
            </div>
        );
    }
}

export default withRouter(Mheader);