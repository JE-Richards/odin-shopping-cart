import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5em;
  background-color: ${({ theme }) => theme.colors.surface};
  & h1 {
    font-size: 1.5em;
  }

  & nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  & svg {
    font-size: 1.25em;
  }

  @media (min-width: 650px) {
    & h1 {
      font-size: 2.5em;
    }

    & svg {
      font-size: 2em;
    }
  }
`;
