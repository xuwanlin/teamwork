import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import './common/style/reset.less';
import App from "./pages/App";


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);