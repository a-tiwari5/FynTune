import * as types from "./actionType";

const initialState = {
  shops: [],
  shop: {},
  loading: true,
};

const shopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };
    case types.DELETE_SHOP:
      return {
        ...state,
        loading: false,
      };

    case types.ADD_SHOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default shopsReducer;
