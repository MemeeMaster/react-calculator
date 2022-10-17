import styled from "styled-components";

export const CalcBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2fr 6fr;
  width: 400px;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.green};
`;
