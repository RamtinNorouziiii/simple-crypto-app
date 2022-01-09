import { ActionTypes } from "./actionTypes"

export const getCoins = (info)=>{
    return{
        type : ActionTypes.GET_COINS,
        payload : info
        
    }
}
export const getCoinComponent = (info)=>{
    return{
        type : ActionTypes.COIN_COMPONENT,
        payload : info
        
    }
}
export const getCoinBuy = (info)=>{
    return{
        type : ActionTypes.BUY_COIN,
        payload : info
        
    }
}