import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery'
import './index.css';

ReactDOM.render(
    hello firend,
    document.getElementById('root')
);

$(window).on('load',function(){
    setTimeout(function(){
        $('#root').fadeIn(8000)
    },700)
})
