import {  FaStar, FaRegStar } from "react-icons/fa";

import { Container } from './styles';

import { StarRating } from '../StarRating';
import { Tag } from '../Tag';

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <StarRating value={data.rating} size={12} />

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}