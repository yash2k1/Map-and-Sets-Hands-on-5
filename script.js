// 1)
let result1=document.getElementById('result1');
var a="aadadsdcv"
let b= new Set(a);
// console.log([...b].join(''));
result1.innerHTML=[...b].join('');

// 2)
let result2=document.getElementById('result2');
let str = "abcadeecfb";
        let map = new Map();
        for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                let value = map.get(str[i]);
                map.set(str[i], value + 1);
            } else {
                map.set(str[i], 1);
            }
        }
        for (let [key, value] of map) {
            // console.log(key + "=" + value);
            result2.innerHTML+=`<div>${key} =${value}</div>`
        }