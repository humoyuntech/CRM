import React from 'react'
import { Container, InputWrapper, Input, SearchIcon, Section } from './style';
import Time from './Time ';
import GenericSelect from './GenericSelect';

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon/> <Input placeholder="search" />
      </InputWrapper>
      <Section><Time/><GenericSelect /> </Section>
    </Container>
  )
}

export default Navbar