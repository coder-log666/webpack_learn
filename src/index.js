import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');

    // lodash 现在使用 import 引入
    element.innerHTML = _.join(['你好', '仍然'], ' ');
    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());