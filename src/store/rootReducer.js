import cakeReducer from "./features/cake/cakeReducer";
import iceReducer from "./features/icecream/iceReducer";
import {combineReducers} from 'redux'


const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceReducer
})

export default rootReducer