import styled from 'styled-components';

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;