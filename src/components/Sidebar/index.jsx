import React from 'react'
import { Container, Side, Body, Wrapper } from './style'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Sidebar = () => {
  return (
      <Container>
      <Side>
        <h1>Sidebar</h1>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  )
}

export default Sidebar