export const addToCartAction = (bookToAdd) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: bookToAdd,
})

export const removeFromCartAction = (index) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: index,
})

export const setUsernameAction = (name) => ({
  type: 'SET_USERNAME',
  payload: name,
})
