import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <header>
      <Link className='site-logo' to='/'>
        eCom Store
      </Link>
      <nav>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to='/contact'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact
        </NavLink>
        <NavLink
          to='/cart'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <img src='/src/assets/images/cart.svg' alt='' className='cart-icon' />
        </NavLink>
      </nav>
    </header>
  );
}
