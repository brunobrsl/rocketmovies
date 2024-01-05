import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 24px 0;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`;

export const Search = styled.input`
  height: 56px;
  width: 630px;

  padding: 19px 24px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE_300};
  
  border: 0;
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    
    font-size: 14px;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  > div {
    display: flex;
    flex-direction: column;

    font-size: 14px;
    
    strong {
      color: ${({ theme }) => theme.COLORS.WHITE_300};
    }

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      font-size: 14px;
      text-align: end;
      border: none;
      background: none;
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }
`;