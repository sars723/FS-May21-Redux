import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import companyReducer from '../reducers/company'
import jobReducer from '../reducers/job'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
export const initialState = {
  favoriteCompany: {
    companies: [],
  },
  job:{
    jobs:[],
    loading: true,
    error: false,
  }
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
  favoriteCompany: companyReducer,
  job: jobReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const configureStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT ? composeEnhancers(applyMiddleware(thunk)) : compose(applyMiddleware(thunk)))

  export const persistor = persistStore(configureStore)
