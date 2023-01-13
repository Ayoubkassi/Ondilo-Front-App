import Navbar from './components/navbar/navbar.component';
import { Main } from './components/navbar/navbar.styles';
import { Container , NavContainer , MainContainer , Flex } from './styles/SchedulePage.styles';
import Header from './components/header/header.component';
import Schedule from './components/schedule/schedule.component';
import {  Left , Right } from './components/header/header.styles';

function App() {
  return (
    <>
      <Container>
        <NavContainer>
          <Navbar />
        </NavContainer>


        <MainContainer>
            <Header />
            <Flex>
              <Left>
                  <Schedule />
              </Left>
              <Right>
                  
              </Right>
            </Flex>
        </MainContainer>
      </Container>
    </>
  );
}

export default App;
