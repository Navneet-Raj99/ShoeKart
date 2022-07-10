// when add to cart function is called ADD function is called and it will send item details as as payload
// ADD_CART is type which is checked in reducer.js to perform the function
export const ADD = (item) => ({
  type: "ADD_CART",
  payload: item,
});

export const DELETE = (id) => ({
  type: "DELETE_ITEM",
  payload: id,
});
export const REMOVE = (item) => ({
  type: "REMOVE_ONE",
  payload: item,
});
