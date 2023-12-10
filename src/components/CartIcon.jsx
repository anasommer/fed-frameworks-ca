import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function CartIcon() {
  const activeStyles = {
    filter:
      'invert(8%) sepia(82%) saturate(6462%) hue-rotate(1deg) brightness(99%) contrast(84%)',
  };

  const [cartItemsCount, setCartItemsCount] = useState(2);

  return (
    <>
      <NavLink
        to='/cart'
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <img
          src='/src/assets/images/cart.svg'
          alt='shopping cart icon'
          className='cart-icon'
        />
      </NavLink>
      {cartItemsCount && (
        <span className='items-counter'>{cartItemsCount}</span>
      )}
    </>
  );
}
