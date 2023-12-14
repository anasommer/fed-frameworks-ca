import { useParams } from 'react-router-dom';
import { apiUrl } from '../api/apiUrl';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

  const star = <FontAwesomeIcon icon={faStar} className='star-icon' />;

  function renderStars(number) {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(star);
    }
    return stars;
  }

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
          <p className='item-price'>
            $
            {item.discountedPrice !== item.price
              ? `${item.discountedPrice} (-${Math.ceil(
                  item.price - item.discountedPrice
                )}$)`
              : item.price}
          </p>
          <button className='link-button'>Add to cart</button>
          {item.reviews.length >= 1 && <h3>Reviews:</h3>}
          <div key={item.reviews.id}>
            {item.reviews
              ? item.reviews.map((review) => (
                  <div className='item-review' key={review.id}>
                    <h4>{review.username} wrote:</h4>
                    <p>{review.description}</p>
                    {renderStars(review.rating)}
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
