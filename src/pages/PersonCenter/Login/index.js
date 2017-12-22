import React, {Component} from 'react';
import './index.less';
export default class Login extends Component {
  render() {
      return (
    <div className="login">
      <div className="login-img"><img src={this.props.megs.photo} alt=""/></div>
      <div className="login-phone">{this.props.megs.username}</div>
    </div>
    )
  }
}