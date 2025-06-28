import React from 'react'
import { Container, SearchIcon, Section } from './style';
import Time from './Time ';
import GenericSelect from './GenericSelect';
import DateTime from './DateTimePicker';
import {GenericInput as Input} from '../Generics/Input';

const Navbar = () => {
  return (
    <Container>
      {/* <InputWrapper>
        <SearchIcon/> <Input placeholder="search" />
      </InputWrapper> */}
      <Input width={400} height={40} borderRadius={8} iconLeft={<SearchIcon />} />
      <Section> <Time/> <DateTime /> <GenericSelect /> </Section>
    </Container>
  )
}

export default Navbar