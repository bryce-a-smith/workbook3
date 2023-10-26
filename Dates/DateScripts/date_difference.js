"use strict";

let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

let startDateDate = new Date(startDate);
let endDateDate = new Date(endDate);

const msec_per_day = 1000 * 60 * 60 *24;

let elapsedMilliseconds = endDateDate.getTime() - startDateDate.getTime();

let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);

console.log("The number of days between dates is " + numDays);