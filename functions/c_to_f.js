"use strict";

const cTemp = 0;

function convertCtoF(c) {
    return (c * 9) / 5 + 32;
}

let fTemp = convertCtoF(cTemp);

console.log(fTemp);

console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));

