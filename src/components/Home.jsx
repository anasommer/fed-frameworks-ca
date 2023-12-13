import { apiUrl } from '../constants/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);

        const response = await fetch(apiUrl);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  const productsEl = products.map((product) => (
    <div key={product.id} className='product-tile'>
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt='' />
      </Link>
      <div className='product-info'>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>

      <button className='link-button' onClick={() => viewProduct(product.id)}>
        View product
      </button>
    </div>
  ));

  function viewProduct(id) {
    window.location.href = `/product/${id}`;
  }

  return (
    <div>
      {isLoading && <div>Loading products...</div>}
      {isError && <div>{isError}</div>}
      {products && (
        <div className='product-list-container'>
          <h1>Explore our products</h1>
          <div className='product-list'>{productsEl}</div>
        </div>
      )}
    </div>
  );
}
