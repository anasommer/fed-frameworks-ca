import { useParams } from 'react-router-dom';
import { apiUrl } from '../api/apiUrl';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const params = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getItem(id) {
      try {
        const response = await fetch(apiUrl + id);
        const data = await response.json();

        setItem(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getItem(params.id);
  }, [params.id]);

  return (
    <>
      {isLoading && <div>Loading products...</div>}
      {isError && <div>{isError}</div>}
      {item ? (
        <div className='item-detail-container' key={item.id}>
          <img
            src={item.imageUrl}
            alt='Image of a product'
            className='item-img'
          />
          <h2>{item.title}</h2>
          <p className='item-desc'>{item.description}</p>
          <p>
            $
            {item.discountedPrice !== item.price
              ? `${item.discountedPrice} (-${Math.ceil(
                  item.price - item.discountedPrice
                )}$)`
              : item.price}
          </p>
          <button className='link-button'>Add to cart</button>
          {item.reviews.length > 1 && <h3>Reviews:</h3>}
          <div key={item.reviews.id}>
            {item.reviews
              ? item.reviews.map((review) => (
                  <div className='item-review' key={review.id}>
                    <h4>{review.username} wrote:</h4>
                    <p>&apos; {review.description} &apos;</p>
                  </div>
                ))
              : ''}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
