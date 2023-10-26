"use strict";

window.onload = init;

function init() {
  const dateConverterBtn = document.getElementById("dateConverterBtn");

  if (dateConverterBtn) {
    dateConverterBtn.onclick = onDateConverterBtnClicked;
  }
}

//const dateConverterBtn = document.getElementById("dateConverterBtn");
const dateForm = document.getElementById("dateForm");
const dateParagraph = document.getElementById("dateP");


function onDateConverterBtnClicked() {

    dateParagraph.innerText = new Date(dateForm.value).toDateString();
}
