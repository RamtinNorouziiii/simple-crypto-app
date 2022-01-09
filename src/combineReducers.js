import { combineReducers } from "redux";
import { getCoinsReducers , coinComponentReducer , coinBuyReducer } from "./reducers";
export const combineReducer = combineReducers({
    allcoins : getCoinsReducers,
    components : coinComponentReducer,
    quantity : coinBuyReducer
})