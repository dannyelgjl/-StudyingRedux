import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { IState } from '../store'

// import { Container } from './styles';
interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();


  // Verificando se o produto está dentro da lista StockCheck
  const hasFeiledStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      <strong>{product.price}</strong>
      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
    </button>

      { hasFeiledStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </article>
  );
}

export default CatalogItem;