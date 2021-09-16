import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// 3 arguments for createStore:
// 1) primary reducer
// 2) initial state of the app
// 3) middlewares/plugins

export const initialState = {
  cart: {
    products: [],
  },
  user: {
    firstName: '',
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

const configureStore = createStore(
  bigReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
  // compose allows you to inject multiple applyMiddleware invokations
  // applyMiddleware is required for injecting a middleware into the redux flow
  // in the case you're using the devTools, you'll need to use their own compose function (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
)

export default configureStore

// how to split the reducers?
// use the combineReducers function and assign a key of your store to one single reducer

// why do we want to split our reducers?
// if our app grows, many actions & cases will be required. If you put everything in a single reducer,
// things will become messy pretty quickly, so let's divide our store into chunks (sub-objects)
// and assign a single little reducer to each one of them.
// improving:
// - readibility
// - maintainability
// our reducers will also be easier to write, because they just need to return a portion of the state!
// remember also that every mapStateToProps in all of your component will STILL RECEIVE the big object
// as a parameter
// and also remember that every time you dispatch an action, EVERY reducer will be triggered,
// so you can even have multiple cases managing the same action in different reducers
