import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  > main {
    max-width: 1137px;
    margin: 50px auto 0;
  }

  > main header {
    display: flex;
    justify-content: space-between;
  }

  > main header h1 {
    font-weight: 400;
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 32px;

  border: none;
  border-radius: 8px;
`;

export const Content = styled.div`
  width: 100%;

  margin-top: 40px;
  max-height: 600px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
      width: 8px;
    }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;