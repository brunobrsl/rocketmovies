import styled from 'styled-components';

export const Container = styled.header`
  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 24px 0;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`;

export const Profile = styled.div`
  display: flex;
  position: relative;

  > a {
    display: flex;
    gap: 10px;
    font-size: 14px;
    
    strong {
      color: ${({ theme }) => theme.COLORS.WHITE_300};
      align-self: center;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }
  }


  > button {
    position: absolute;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 14px;
    text-align: end;
    border: none;
    background: none;
    bottom: 5%;
  }
`;