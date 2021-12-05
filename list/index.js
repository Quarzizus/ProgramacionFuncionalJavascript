import { invalidateValues } from "../inputs/values";

const list = [];

const listItems = document.getElementById("list-items");

const addRow = () => {
  if (invalidateValues) return;
  list.map((box) => {
    const row = document.createElement("tr");
    Object.values(box).map((value) => {
      const th = document.createElement("th");
      th.innerText = value;
      row.appendChild(th);
    });
    listItems.appendChild(row);
  });
};

export { list, addRow };
