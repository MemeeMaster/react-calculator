import styled from "styled-components";

export const StyledScreen = styled.p`
  grid-column: 1/-1;
  grid-row: 2;
  font-size: 40px;
  font-weight: bold;
  margin-right: 5%;
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
`;
