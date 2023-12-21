import { Link } from 'react-router-dom';

export default function CheckOutPage() {
  return (
    <div>
      <h2>Checkout page</h2>
      <Link to={`/checkoutSuccess`}>
        <button className='link-button'>Checkout</button>
      </Link>
    </div>
  );
}
