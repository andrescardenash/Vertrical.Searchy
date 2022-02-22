import getProducts from './Products';
import types from './types';

const initialStore = {
  products: [],
  product: {},
  getProducts,
};

const storeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case types.GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: state.products.find(p => p.id === payload),
      };
    default:
      return state;
  }
};
export { initialStore, types };
export default storeReducer;
