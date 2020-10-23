import React from 'react';

import { Provider } from 'react-redux';

import Catalog from './Components/Catalog';
import Cart from './Components/Cart';

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
