import { Reducer } from 'redux';
import { ICartState, ActionTypes } from './types';
import produce from 'immer';


const INITITAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITITAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;
        
        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id
        );

          if (productInCartIndex >= 0) {
            draft.items[productInCartIndex].quantity++;
          }else{
            draft.items.push({
              product,
              quantity: 1,
            });
          }
        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      default : {
        return draft;
      }
    }
  });
}

export default cart;