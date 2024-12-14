import styled from 'styled-components';

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardImgContainer = styled.div`
  border-radius: 16px;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  & img {
    max-width: 200px;
    max-height: 300px;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;
