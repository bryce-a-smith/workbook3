"use strict";

const myBday = new Date("01/06/1994");
const momBday = new Date("010 24 1967");
//months zero-based using values
const dadBday = new Date(1962, 8, 18);

console.log(myBday.toLocaleString());
console.log(momBday.toLocaleString());

console.log(dadBday.toLocaleString());
