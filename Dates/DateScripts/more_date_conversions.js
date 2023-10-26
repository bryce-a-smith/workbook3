"use strict";

const myBday = new Date("01/06/1994");
const momBday = new Date("010 24 1967");
const dadBday = new Date(1962, 9, 18);

console.log(myBday.toLocaleString());
console.log(momBday.toLocaleString());

console.log(dadBday.toLocaleString());
//why does this one add 1 month?
