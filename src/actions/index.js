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

// redux-thunk will allow you to create much more powerful action-creators
// an action-creator so far is just a function returning an action (a JS object)

// redux-thunk is useful for performing asynchronous operations in redux
// or very complex synchronous ones

export const addToCartActionThunk = (bookToAdd) => {
  return async (dispatch, getState) => {
    // so now I have a function to work with!
    // this is the perfect place for doing even async operations!
    // you can delay the dispatching of your action, i.e. waiting for a fetch
    console.log('In a second I will add the item to the cart!')
    console.log('a little more...', getState())
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: bookToAdd,
    })
  }
}

// without thunk, redux will not allow you to do this! it will crash :(

export const fillBooksAction = () => {
  return async (dispatch, getState) => {
    console.log('fetching the books...')
    try {
      let resp = await fetch('https://striveschool-api.herokuapp.com/food-books')
      if (resp.ok) {
        let books = await resp.json()
        dispatch({
          type: 'FILL_BOOKS_LOADING',
          payload: false,
        })
        dispatch({
          type: 'FILL_BOOKS_ERROR',
          payload: false,
        })
        dispatch({
          type: 'FILL_BOOKS',
          payload: books,
        })
      } else {
        console.log('error')
        dispatch({
          type: 'FILL_BOOKS_LOADING',
          payload: false,
        })
        dispatch({
          type: 'FILL_BOOKS_ERROR',
          payload: true,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'FILL_BOOKS_LOADING',
        payload: false,
      })
      dispatch({
        type: 'FILL_BOOKS_ERROR',
        payload: true,
      })
    }
  }
}
