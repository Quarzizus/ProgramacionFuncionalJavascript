const a = {
  value: 2,
};

// Muta
const addOne = () => (a.value += 1);
const timesTwo = () => (a.value *= 2);

const b = {
  value: 2,
};

// No Muta
const addOneB = (obj) => {
  Object.assign({}, obj, { value: obj.value + 1 });
};
const timesTwoB = (obj) => {
  Object.assign({}, obj, { value: obj.value * 1 });
};

export { b, timesTwoB, addOneB };
