import React from 'react'
import { Container, InputWrapper, Input, SearchIcon } from './style'

const Navbar = () => {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon/> <Input placeholder="search" />
      </InputWrapper>
    </Container>
  )
}

export default Navbar