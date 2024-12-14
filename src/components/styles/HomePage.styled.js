import styled from 'styled-components';

export const StyledHero = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 6em 3em;
  & h1 {
    font-size: 3.5em;
    line-height: 1.1;
    padding: 0.25em 0;
    width: 100%;

    & span {
      font-weight: 1000;
      font-size: 1.25em;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 700;
    font-size: 1.125em;
  }
`;

export const StyledBestSellers = styled.section`
  padding: 2em 3em;
  width: 100%;
`;

export const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding: 1em;
  margin-bottom: 1em;
  width: 100%;
`;
