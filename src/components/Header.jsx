import { Link, NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';

export default function Header() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#9E1416',
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

        <CartIcon />
      </nav>
    </header>
  );
}
