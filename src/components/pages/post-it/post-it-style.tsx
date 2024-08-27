import styled from 'styled-components';

export const PostItContainer = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: 24px;
  width: 20rem;
  height: 22rem;
  border: 1px solid ${({ theme }) => theme.colors.AccentBorder};
  box-shadow: ${({ theme }) => theme.colors.shadowLight};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: rotate(-2deg);

  p,
  h1 {
    word-break: break-word;
  }
`;
