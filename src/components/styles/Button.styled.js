import styled from 'styled-components';

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})`
  border-radius: 8px;
  border: ${({ theme, variant }) => theme.button[variant].border};
  padding: 0.6em 1.2em;
  font-size: 1.1em;
  font-weight: 700;
  background-color: ${({ theme, variant }) => theme.button[variant].background};
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${({ theme, variant }) =>
      theme.button[variant].backgroundHover};
  }

  &:focus {
    border: ${({ theme, variant }) => theme.button[variant].borderFocus};
  }
`;
