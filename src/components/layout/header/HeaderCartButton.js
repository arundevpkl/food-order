import React,{useContext} from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

   const cartCxt = useContext(CartContext)
   const numOfCartItems = cartCxt.items.reduce((curNUmber,item)=>{
     return curNUmber + item.amount;
   },0)
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;