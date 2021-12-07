const buildSum = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(buildSum(5)(5));
