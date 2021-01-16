import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  contactAddReducer,
  contactListReducer,
  contactRemoveReducer,
  contactUpdateReducer,
} from './reducers/contactReducers'

const reducer = combineReducers({
  contactAdd: contactAddReducer,
  contactList: contactListReducer,
  contactRemove: contactRemoveReducer,
  contactUpdate: contactUpdateReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
