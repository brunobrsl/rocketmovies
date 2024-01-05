import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_400}` : "none"};

  padding-right: 16px;
  border-radius: 10px;

  > button {
    border: none;
    background: none;
  }

  .button-add,
  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;

    padding-left: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;