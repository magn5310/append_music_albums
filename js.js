"use strict";

const authorInp = document.querySelector("#author");
const titleInp = document.querySelector("#title");
const yearInp = document.querySelector("#year");
const buttonAdd = document.querySelector("#addButton");
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

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    table.removeChild(newRow);
  });
  deleteCell.appendChild(deleteButton);

  newRow.appendChild(authorCell);
  newRow.appendChild(titleCell);
  newRow.appendChild(yearCell);
  newRow.appendChild(deleteCell);

  table.appendChild(newRow);

  authorInp.value = "";
  titleInp.value = "";
  yearInp.value = "";
});
