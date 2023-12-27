import { NavLink } from 'react-router-dom';
import useStore from '../store/cart';

export default function CartIcon() {
  const activeStyles = {
    filter:
      'invert(8%) sepia(82%) saturate(6462%) hue-rotate(1deg) brightness(99%) contrast(84%)',
  };

  const { cart } = useStore();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <NavLink
        to='/cart'
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <img
          src='/assets/images/cart.svg'
          alt='shopping cart icon'
          className='cart-icon'
        />
      </NavLink>
      {totalQuantity > 0 && (
        <span className='items-counter'>{totalQuantity}</span>
      )}
    </>
  );
}
