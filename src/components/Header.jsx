import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link className='site-logo' to='/'>
        eCom Store
      </Link>
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>Cart</NavLink>
        <NavLink>Contact</NavLink>
      </nav>
    </header>
  );
}
