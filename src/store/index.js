import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'
import thunk from 'redux-thunk'
import bookReducer from '../reducers/book'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session'
import { encryptTransform } from 'redux-persist-transform-encrypt'

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
  book: {
    stock: [],
    loading: true,
    error: false,
  },
}

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const configureStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
  // if the application is in production mode, disable the redux devTools just injecting redux-thunk into the middleware flow

  // compose allows you to inject multiple applyMiddleware invokations
  // applyMiddleware is required for injecting a middleware into the redux flow
  // in the case you're using the devTools, you'll need to use their own compose function (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
)

export const persistor = persistStore(configureStore)

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
