import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

import recipesReducer from "./recipesReducer"

let reducers = combineReducers({
   recipesPage: recipesReducer,
   form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store