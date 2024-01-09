import { FaStar, FaRegStar } from 'react-icons/fa';

import { Container } from './styles';

export function StarRating( {value, size} ) {
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        index += 1;
        
        return index <= value ? <FaStar key={index} size={size} /> : <FaRegStar key={index} size={size} />;
      })}
    </Container>
  );
}