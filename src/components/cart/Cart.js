import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../ui/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const totalAmount = `$${cartCxt.totalAmount.toFixed(2)}`;
  const hasItems = cartCxt.items.length > 0;
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCxt.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;