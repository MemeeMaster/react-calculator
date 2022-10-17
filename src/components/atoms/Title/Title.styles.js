import styled from "styled-components";

export const StyledTitle = styled.h2`
  grid-column: 1/-1;
  grid-row: 1;
  margin-left: 5%;
  color: ${({ theme }) => theme.colors.white};
`;
