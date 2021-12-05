// Muta a list (Array)
const addToList = (list, item, quantity) => {
  list.push({
    item,
    quantity,
  });
  return list;
};

// Muta a obj (Object)
const addToObj = (obj, item, quantity) => {
  obj.item = item;
  obj.quantity = quantity;
  return obj;
};

// No muta a list (Array)
const addToList2 = (list, item, quantity) => {
  // spread !== deepcopy
  const newList = [...list];
  newList.push({
    item,
    quantity,
  });
  return newList;
};

const addToObj2 = (obj, item, quantity) => {
  const newObj = JSON.parse(JSON.stringify(obj));
  newObj.item = item;
  newObj.quantity = quantity;
  return newObj;
};
