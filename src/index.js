import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import './common/style/reset.less';
import App from "./pages/routes";


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);