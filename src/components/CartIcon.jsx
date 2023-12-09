import { NavLink } from 'react-router-dom';

export default function CartIcon() {
  const activeStyles = {
    filter:
      'invert(8%) sepia(82%) saturate(6462%) hue-rotate(1deg) brightness(99%) contrast(84%)',
  };
  return (
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
  );
}
