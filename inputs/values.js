import { calories, carbs, description, protein } from "./index";

//inputs
const inputs = [calories, carbs, description, protein];

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
const toValidate = () => {
  [...inputs].map((input) => {
    !input.value
      ? input.classList.add("is-invalid")
      : input.classList.remove("is-invalid");
  });
};

export { values, toValidate };
