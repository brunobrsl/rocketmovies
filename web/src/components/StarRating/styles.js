import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 6px;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;