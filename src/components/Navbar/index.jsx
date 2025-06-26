import React from 'react'
import { Container, InputWrapper, Input, SearchIcon, Section } from './style';
import Time from './Time ';
import GenericSelect from './GenericSelect';
import DateTime from './DateTimePicker';

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon/> <Input placeholder="search" />
      </InputWrapper>
      <Section> <Time/> <DateTime /> <GenericSelect /> </Section>
    </Container>
  )
}

export default Navbar