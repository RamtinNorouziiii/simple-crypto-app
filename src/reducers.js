import { ActionTypes } from "./actionTypes";

export const getCoinsReducers = (state = { coins: [] }, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_COINS:
      return { ...state, coins: payload };
    default:
      return state;
  }
};
export const coinComponentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.COIN_COMPONENT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export const coinBuyReducer = (state = { price: [] }, { type, payload }) => {
  switch (type) {
    case ActionTypes.BUY_COIN:
      return { ...state, price: payload };
    default:
      return state;
  }
};
