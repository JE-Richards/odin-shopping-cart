import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 10px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};

  & > img {
    width: 100%;
    max-width: 200px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  & h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  & h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
