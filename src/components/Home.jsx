import { apiUrl } from '../constants/api';
import { useEffect, useState } from 'react';

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

  return (
    <div>
      {isLoading && <div>Loading products...</div>}
      {isError && <div>{isError}</div>}
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
    </div>
  );
}
