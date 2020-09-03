import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import burgerReducer from './burgger/burgerReducer'
import userReducer from './asynUsers/userReducer'
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    burger: burgerReducer,
    user: userReducer
})

export default rootReducer