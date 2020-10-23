import { Reducer } from 'redux';
import { ICartState } from './types';

const INITITAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState> = (state, action) => {
  console.log(state, action);
  return INITITAL_STATE;

}

export default cart;