/**
 * Created by yangliu on 2017/4/13.
 */
import _ from 'lodash';
import j from 'jquery';
//noinspection JSAnnotator
import foo from './foo'
function component () {
    var element = j('<div></div>');
    /* lodash is required for the next line to work */
    element.html(_.join(['Hello','杨柳'], ' '))
    return element.get(0);
}

document.body.appendChild(component());
console.log(foo)
console.log(foo()) //打开浏览器控制台看看结果