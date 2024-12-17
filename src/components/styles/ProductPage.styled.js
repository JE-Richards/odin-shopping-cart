import styled from 'styled-components';

export const StyledProductPage = styled.div`
  padding: 2em 3em;
  display: flex;
  flex-direction: column;
  gap: 2em;

  & h1 {
    font-size: 3em;
  }

  & h2 {
    font-size: 1.25em;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  & img {
    object-fit: contain;
    height: auto;
    width: auto;
    max-width: 300px;
  }

  & > div:first-of-type {
    & > p {
      margin-top: 0.5em;
    }

    & > div {
      display: flex;
      margin-top: 1em;
      gap: 1em;

      & > p {
        font-weight: 500;
        font-size: 0.9em;
      }
    }

    & span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-size: 1.5em;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    gap: 1em;
  }
`;
