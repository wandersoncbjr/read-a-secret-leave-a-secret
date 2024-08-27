import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  font-size: ${({ theme }) => theme.typography.size.xLarge};
  color: red;
`;
