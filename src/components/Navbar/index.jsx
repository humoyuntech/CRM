import React from 'react'
import { Container, SearchIcon, Section } from './style';
import Time from './Time ';
import DateTime from './DateTimePicker';
import {GenericInput as Input} from '../Generics/Input';
import GenericSelect from '../Generics/Select';

const Navbar = () => {
    const data = [
      { value: "uzbek", title: "Uzbek" },
      { value: "english", title: "English" },
    { value: "russian", title: "Russian" },
  ];
  return (
    <Container>
      <Input width={400} height={40} borderRadius={8} iconLeft={<SearchIcon />} />
      <Section> <Time/> <DateTime /> <GenericSelect label="Language" data={data} /> </Section>
    </Container>
  )
}

export default Navbar