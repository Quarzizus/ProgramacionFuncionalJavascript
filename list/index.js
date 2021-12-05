import { invalidateValues, clearInputs } from "../inputs/values";

const list = [];

const listItems = document.getElementById("list-items");

const addRow = () => {
  if (invalidateValues) return;
  list.map((box) => {
    const row = document.createElement("tr");
    Object.values(box).map((value) => {
      const td = document.createElement("td");
      td.innerText = value;
      row.appendChild(td);
    });
    listItems.appendChild(row);
  });
  clearInputs();
};

export { list, addRow };
