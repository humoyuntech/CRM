import styled from "styled-components";
import getValue from "../../hooks/getStyleValue";

const Container = styled.div`
  padding: 24px;
  border-radius: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => getValue(gap, "16px")};
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid red;
  padding: 24px;
  padding-bottom: 0;
  gap: ${({ gap }) => getValue(gap, "16px")};
  
  
  `;
/* background-color: ${({ title }) => getColor(title)?.ternary}; */

export {Container, Wrapper, Card}