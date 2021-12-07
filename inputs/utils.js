import { inputs } from "./index";

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
};

// clear inputs

const clearInputs = () => {
  calories.value = null;
  protein.value = null;
  description.value = null;
  carbs.value = null;
};
export { values, toValidate, invalidateValues, clearInputs };
