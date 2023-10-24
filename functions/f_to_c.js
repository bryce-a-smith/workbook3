"use strict";

const fTemp = 92;

function convertFtoC(f) {
    return ((f - 32) * 5) / 9;
}

let cTemp = convertFtoC(fTemp);

console.log(cTemp);

console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));