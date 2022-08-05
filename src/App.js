import {  useState } from 'react';
import Header from './components/layout/header/Header';
import Cart from './components/cart/Cart';
import Meals from './components/meals/Meals';
import CartProvider from './store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;