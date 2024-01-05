import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

export function ButtonText({ title, path,...rest }) {
  return (
    <Container
      type="button"
      to={path}
      {...rest}
    >
      <FiArrowLeft />
      {title}
    </Container>
  );
}