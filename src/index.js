import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery'
import './index.css';

ReactDOM.render(
    <div class="contain">hello firend</div>,
    $('body')[0]
);
$(window).on('load',function(){
    setTimeout(function(){
        $('div').fadeIn(8000)
    },700)
})

