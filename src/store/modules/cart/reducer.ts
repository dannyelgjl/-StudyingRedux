import { Reducer } from 'redux';
import { ICartState } from './types';
import produce from 'immer';

const INITITAL_STATE: ICartState = {
  items: []
};

const cart: Reducer<ICartState> = (state = INITITAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;
          
        draft.items.push({
            product,
            quantity: 1,
        });

        break;
      }
      default : {
        return draft;
      }
    }
  });
}

export default cart;