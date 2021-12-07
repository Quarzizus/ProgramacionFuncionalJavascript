import { invalidateValues, values } from "../inputs/values";

const totals = {
  calories: 0,
  carbs: 0,
  protein: 0,
};
const totalNodes = document.querySelectorAll(".total");
const listItems = document.getElementById("list-items");

const deleteRow = (row) => {
  listItems.removeChild(row);
  [...row.childNodes].map((child) => {
    if (!+child.textContent) return;
    const clase = child.classList[0];
    totals[clase] -= +child.textContent;
  });
  renderTotal();
};

const createButton = (className = "", onClick = () => {}) => {
  const button = document.createElement("button");
  button.classList = className;
  button.addEventListener("click", onClick);
  return button;
};

const renderTotal = () => {
  totalNodes.forEach((total) => {
    let clase = total.classList[1];
    total.innerText = totals[clase];
  });
};

const addRow = (cb) => {
  if (invalidateValues) return;
  const row = document.createElement("tr");
  const removeButton = createButton("remove", () => deleteRow(row));
  Object.entries(values).map(([key, value]) => {
    const td = document.createElement("td");
    td.classList = key;
    td.innerText = value;
    row.appendChild(td);
    row.appendChild(removeButton);
    totals[key] += +value;
  });

  listItems.appendChild(row);
  cb();
};

export { addRow, renderTotal };
