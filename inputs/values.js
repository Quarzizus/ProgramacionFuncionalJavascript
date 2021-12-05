import { calories, carbs, description, protein } from "./index";
import { list } from "../list";

// inputs
const inputs = [calories, carbs, description, protein];

// values
let values = {
  description: null,
  calories: null,
  carbs: null,
  protein: null,
};

// inputHandle
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.classList.remove("is-invalid");
    values = {
      ...values,
      [e.target.name]: e.target.value,
    };
  });
});

// validate
let invalidateValues = true;
const toValidate = () => {
  [...inputs].map((input) => {
    if (!input.value) {
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });
  invalidateValues = Object.values(values).some((value) => !value);
  !invalidateValues && list.push(values);
};

export { values, toValidate, invalidateValues };
