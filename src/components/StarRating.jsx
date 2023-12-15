import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarIcon = () => <FontAwesomeIcon icon={faStar} className='star-icon' />;

function renderStars(number) {
  return Array.from({ length: number }, (_, index) => <StarIcon key={index} />);
}

const StarRating = ({ rating }) => {
  return <div>{renderStars(rating)}</div>;
};

export default StarRating;
