import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 1.5em;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 400px;
  height: 500px;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2em;
    width: 100%;
    height: 120px;
    gap: 0.5em;
  }

  & h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.25em;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.25em;
  }
`;
