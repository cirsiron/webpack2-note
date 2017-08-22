import _ from 'lodash';
// import './css/index.css';
import Icon from './img/brand@3x.png';
import './less/index.less';
import printMe from './js/print';
import Layer from './js/layer.js';
import * as ejs from './ejs/layer.js';

const $ = require("jquery");

const content = function() {
    let name = "1111";
    let ele = document.createElement("div");
    ele.innerHTML = Layer.tpl({ name });
    return ele;
}


document.body.appendChild(content());

function component() {
    var ele = document.createElement("div");
    ele.innerHTML = _.join(['hello', 'world'], ' ');
    ele.classList.add("hello");

    var myIcon = new Image();
    myIcon.src = Icon;
    ele.appendChild(myIcon);


    var btn = document.createElement("button");
    btn.innerHTML = "Click Me!";
    btn.onclick = printMe;
    ele.appendChild(btn);
    return ele;
}

document.body.appendChild(component());

ejs.render({
    title: `Otra tarjeta`
})