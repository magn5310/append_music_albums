"use strict";

const authorInp = document.querySelector("#author");
const titleInp = document.querySelector("#title");
const yearInp = document.querySelector("#year");
const buttonAdd = document.querySelector("button");
const table = document.querySelector("table");

buttonAdd.addEventListener("click", function (e) {
  e.preventDefault();

  const newRow = document.createElement("tr");

  const authorCell = document.createElement("td");
  authorCell.textContent = authorInp.value;

  const titleCell = document.createElement("td");
  titleCell.textContent = titleInp.value;

  const yearCell = document.createElement("td");
  yearCell.textContent = yearInp.value;

  newRow.appendChild(authorCell);
  newRow.appendChild(titleCell);
  newRow.appendChild(yearCell);

  table.appendChild(newRow);

  authorInp.value = "";
  titleInp.value = "";
  yearInp.value = "";
});
