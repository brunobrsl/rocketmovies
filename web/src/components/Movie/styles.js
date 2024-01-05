import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  text-align: start;

  border: none;
  border-radius: 16px;
  
  padding: 32px;
  margin-right: 16px;
  margin-bottom: 24px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_300};

    font-size: 24px;
    font-weight: 700;

    margin-bottom: 8px;
  }

  > .rating {
    display: flex;
    gap: 6px;

    svg {
      width: 12px;
      height: 12px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    text-align: justify;
    margin: 15px 0;

    font-size: 16px;
  }

  > footer span {
    text-transform: capitalize;
    padding: 5px 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`;