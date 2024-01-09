import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  width: 99%;

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

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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