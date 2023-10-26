"use strict";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDateTime = new Date();

console.log(
  `${currentDateTime.getDate()}-${months[currentDateTime.getMonth()]}-${currentDateTime.getFullYear()}(${
    days[currentDateTime.getDay()]
  })`
);
