import styled, { css } from 'styled-components';

export const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;

  & > div:last-child {
    margin-top: 2em;
    display: flex;
    align-items: center;
    gap: 3em;

    & span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em 1em;

  border-top: 2px solid ${({ theme }) => theme.colors.textSecondary};

  img {
    height: auto;
    width: auto;
    max-height: 150px;
    max-width: 100px;
  }

  ${(props) =>
    props.isLastItem &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.textSecondary};
    `};

  h1 {
    font-size: 2em;
  }

  p {
    margin-top: 1em;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 1.125em;
  }

  & div:first-of-type {
    flex: 1;
  }

  & div:last-child {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 800px) {
    flex-direction: row;

    & div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
