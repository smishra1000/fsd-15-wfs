import {combineReducers} from "redux"

import CounterReducer from "./CounterReducer"

import ContactsReducer from "./ContactsReducer"

const rootReducer = combineReducers({counter:CounterReducer,contacts:ContactsReducer})

export default rootReducer