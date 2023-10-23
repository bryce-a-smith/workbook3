"use strict";

let fullName = "Bryce Smith";
let address = "8281 E Van Buren Dr.";
let city = "Pittsburgh";
let state = "PA";
let zip = 15237;

let fakeName = "Bruce Brucey";
let fakeAddress = "42 Green Meadow Lane";
let fakeCity = "Cleveland";
let fakeState = "CA";
let fakeZip = 12345;

let num1 = 5;
let num2 = 10;

let numA = 20;
let numB = 500;

function displayMailingLabel(fullName, address, city, state, zip) {
  console.log(fullName);
  console.log(address);
  console.log(`${city}, ${state} ${zip}`);
  console.log("\n");
}

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);
  console.log("\n");
}

function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;
  console.log(`Total Due: $${totalDue.toFixed(2)}`);
  console.log(`Amount Paid: $${amountPaid.toFixed(2)}`);
  if (amountPaid >= totalDue) {
    console.log(`Change Due: $${changeDue.toFixed(2)}`);
  } else {
    console.log(`You still owe: $${Math.abs(changeDue).toFixed(2)}`);
  }
  console.log("\n");
}

displayMailingLabel(fullName, address, city, state, zip);
displayMailingLabel(fakeName, fakeAddress, fakeCity, fakeState, fakeZip);

addNumbers(num1, num2);
addNumbers(numA, numB);

displayReceipt(20.57, 30);
displayReceipt(53.45, 53.45);
displayReceipt(45.8, 40);
