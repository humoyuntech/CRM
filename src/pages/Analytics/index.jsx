import Subtitle from '../../components/Generics/Subtitle'
import Title from '../../components/Generics/Title'
import { privateData, media } from '../../utils/analitics'
import { Container, Wrapper, Card, Section, Plus, Counter, Arrow, SubCard } from './style'

const Analytics  = () => {

  return (
    
    <Container> 
      <Title mb={16}>Analytics</Title>
      <Wrapper gap={24}>
        {
          privateData.map((value) => {
              const { icon: Icon } = value;
              const { img: Img } = value;
            return (
              <Card key={value.id} gap={24} title={value.title}>
                <Section title={value.title}>
                  <Title> <Icon className="icon" /> {value.title} </Title> {" "} <Plus title={value.title}/>
                </Section>
                
                <Section title={value.title}>
                  <Title>
                     <Arrow /> <Counter>{value.count}</Counter>
                  </Title> {" "} <Img/>
                </Section>

              </Card>
            )
          })
        }
      </Wrapper>

    <Subtitle mt={24} mb={16}>
        Ijtimoiy tarmoqlar
      </Subtitle>
      <Wrapper>
        {media.map((value) => {
          const { icon: Icon } = value;
          return (
            <SubCard key={value.id} gap={24} title={value.title}>
              {/* TOP */}
              <Section title={value.title}>
                <Subtitle>
                  <Icon className="subicon" /> {value.title}
                </Subtitle>{" "}
                <Plus title={value.title} />
              </Section>
              {/* BOTTOM */}
              <Section title={value.title}>
                <Title color={"#52C41A"}>
                  <Arrow /> 22%
                </Title>
                <Counter>{value.count}K</Counter>
              </Section>
            </SubCard>
          );
        })}
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
