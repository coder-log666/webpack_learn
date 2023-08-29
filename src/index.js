import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import data from './my-json.json'
import csv from './my-csv.csv'
import xml from './my-xml.xml'

import toml from './my-toml.toml';
import yaml from './my-yaml.yaml';
import json from './my-json5.json5';


console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');

    // lodash 现在使用 import 引入
    element.innerHTML = _.join(['你好', '仍然'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(data)
    console.log(csv)
    console.log(xml)

    return element;
}

document.body.appendChild(component());