import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  gap: 40px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (min-width: 240px) and (max-width: 767px) {
    flex-direction: column;
  }
`;
