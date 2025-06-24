import styled from "styled-components";
import search from "../../assets/icons/search.svg?react";

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid coral;
  background-color: white;
  height: 60px;
  padding: 0 16px 0 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  border: 1px solid var(--secondaryColor);
  width: fit-content;
  height: 40px;
  border-radius: 8px;
`;

const Input = styled.input`
  flex: 1;
  max-width: 500px;
  width: 100%;
  outline: none;
  border: 0;
  height: 38px;
  /* font-weight: 500; */
  size: 14px;
  line-height: 20px;
  color: #bbc3cd;
  border-radius: 8px;

  &::placeholder {
    color: #bbc3cd;
    font-weight: 300;
    size: 14px;
    line-height: 20px;
  }
`;

const SearchIcon = styled(search)`
  margin: 0 16px;
`;


export { Container, InputWrapper, Input, SearchIcon };