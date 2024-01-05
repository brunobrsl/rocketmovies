import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  border: none;
`;