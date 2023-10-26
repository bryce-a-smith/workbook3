"use strict";

class Person {
    constructor(grossPay, withholdingCode) {
        this.grossPay = grossPay;
        this.withholdingCode = withholdingCode;
    }
}

function getSocSecTax(gp) {
    return gp * .062;
}

function getMedicareTax(gp) {
    return gp * .0145;
}

function getTaxRate(wc) {
    switch (wc) {
        case 0:
            return .23;
            break;
        case 1:
            return .21;
            break;
        case 2:
            return .195;
            break;
        case 3:
            return .185;
            break;
        default:
            if(wc >= 4) {
                return .18 - ((wc-4) * .005);
                break;
            }
    }
}

function getFederalTax(gp, wc) {
    return gp * getTaxRate(wc);
}

const person1 = new Person(750, 0);
const person2 = new Person(1550, 2);
const person3 = new Person(1100, 6);

console.log(`$${getFederalTax(person1.grossPay, person1.withholdingCode).toFixed(2)}`);
console.log(`$${getFederalTax(person2.grossPay, person2.withholdingCode).toFixed(2)}`);
console.log(`$${getFederalTax(person3.grossPay, person3.withholdingCode).toFixed(2)}`);

