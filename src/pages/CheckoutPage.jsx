import { Link } from 'react-router-dom';
import useStore from '../store/cart';

export default function CheckOutPage() {
  const { cart, removeFromCart, clearCart } = useStore();

  return (
    <div>
      <h2>Checkout page</h2>

      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
          {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
        </ul>
      </div>
      <Link to={`/checkoutSuccess`}>
        <button className='link-button'>Checkout</button>
      </Link>
    </div>
  );
}
