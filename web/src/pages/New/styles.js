import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    overflow-y: auto;
    max-width: 1137px;
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

export const Form = styled.form`
  max-width: 1113px;
  margin-right: 16px;

  > header h1 {
    margin-top: 24px;
  }
  
  > .inputs {
    display: flex;
    gap: 40px;

    margin: 40px 0;

    input::-webkit-outer-spin-button, 
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input[type=number] {
      appearance: textfield;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 24px;
  }

  > .tags {
    display: flex;
    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 16px;
    border-radius: 8px;
  }

  > .buttons {
    display: flex;
    gap: 40px;

    margin-top: 16px;
  
    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;