import styled from "styled-components";

export const StyledBtn = styled.button`
  height: 100%;
  width: 25%;
  font-size: 25px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
