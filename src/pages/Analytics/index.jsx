import Subtitle from '../../components/Generics/Subtitle'
import Title from '../../components/Generics/Title'
import { privateData } from '../../utils/analitics'
import { Container, Wrapper, Card, Section } from './style'

const Analytics  = () => {

  return (
    
    <Container> 
      <Title mb={16}>Analytics</Title>
      <Wrapper gap={24}>
        {
          privateData.map((value) => {
            return (
              <Card key={value.id}>
                {value.title}
              </Card>
            )
          })
        }
      </Wrapper>
      <Subtitle mt={24} mb={16}>Ijtimoiy tarmoqlar</Subtitle>
      <Wrapper>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </Wrapper>
      <Wrapper>
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
      </Wrapper>
    </Container>

  )
}

export default Analytics 