"use strict";

function getSocSecTax(gp) {
    return gp * .062;
}

function getMedicareTax(gp) {
    return gp * .0145;
}

function getTaxRate(wc) {
    switch (wc) {
        case 0:
            return .023;
            break;
        case 1:
            return .021;
            break;
        case 2:
            return .0195;
            break;
        case 3:
            return .0185;
            break;
        default:
            if(wc >= 4) {
                return .018 - ((wc-4) * .005);
                break;
            }
    }
}

function getFederalTax(gp, wc) {
    return gp * getTaxRate(wc);
}

console.log(`$${getFederalTax(750, 0).toFixed(2)}`);
console.log(`$${getFederalTax(1550, 2).toFixed(2)}`);
console.log(`$${getFederalTax(1100, 6).toFixed(2)}`);