import React, {Component} from 'react';
import './index.less';
export default class Login extends Component {
  render() {
    return (
    <div className="login">
      <div className="login-img"><img src={require('../../../common/images/1.jpg')} alt=""/></div>
      <div className="login-phone">{this.props.username.username}</div>
    </div>
    )
  }
}