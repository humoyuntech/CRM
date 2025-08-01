import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react";

export const Container = styled.div``;
export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
`;

Action.Edit = styled(edit)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;
Action.Move = styled(edit)`
  padding: 10px;
  width: 42px;
  height: 42px;
`;

export const Devider = styled.div`
  display: flex;
  margin-top: 16px;
`;

Devider.Role = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;
Devider.Filiallar = styled.div`
  flex: 1;
`;

Devider.Title = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #253e5f80;
`;

export const Section = styled.div`
  display: flex;
  padding: 12px 0;
  align-items: center;
`;