import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    overflow-y: auto;
    max-width: 1137px;
    height: 581px;
    margin: 40px auto 0;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  margin-right: 16px;

  > .data {
    position: relative;
    margin: 24px 0;
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 36px;
      font-weight: 500;
    }

    button {
      position: absolute;
      background: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
      border: none;
      right: 0;
    }
  }

  > .metadata {
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;

    img {
      width: 16px;
      height: 16px;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
      border-radius: 50%;
    }

    span {
      font-size: 16px;
    }

    svg {
      margin-left: 12px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > p {
    margin-top: 40px;
    text-align: justify;
  }
`;