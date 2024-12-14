import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1em;
  color: ${({ theme }) => theme.colors.background};
`;
