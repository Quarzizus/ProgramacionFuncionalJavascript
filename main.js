import { toValidate } from "./inputs/values";
import { addRow } from "./list/index";
// const compose =
//   (...functions) =>
//   (data) =>
//     functions.reduceRight((value, func) => func(value), data);

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  toValidate();
  addRow();
});
