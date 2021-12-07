import { clearInputs, toValidate } from "./inputs/utils";
import { addRow, renderTotal } from "./list/utils";
// const compose =
//   (...functions) =>
//   (data) =>
//     functions.reduceRight((value, func) => func(value), data);

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  toValidate();
  addRow(() => {
    clearInputs();
    renderTotal();
  });
});
