"use strict";

let product = "ACME:123-L"
let productSupplierCode, productNumberCode, productSize;

function getSupplier(code) {
    return code.substring(0, code.indexOf(":"));
}

function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));
}

function getSize(code) {
    return code.substring(code.indexOf("-") + 1);
}

productSupplierCode = getSupplier(product);
productNumberCode = getProductNumber(product);
productSize = getSize(product);

console.log(product, productSupplierCode, productNumberCode, productSize);