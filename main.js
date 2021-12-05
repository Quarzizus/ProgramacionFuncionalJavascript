import { values, toValidate } from "./inputs/values";
// const compose =
//   (...functions) =>
//   (data) =>
//     functions.reduceRight((value, func) => func(value), data);

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  console.log(toValidate(values), values);
  // console.log(values);
});
