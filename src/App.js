import Navbar from './components/navbar/navbar.component';
import { Main } from './components/navbar/navbar.styles';
import { Container , NavContainer , MainContainer } from './styles/SchedulePage.styles'

function App() {
  return (
    <>
      <Container>
        <NavContainer>
          <Navbar />
        </NavContainer>


        <MainContainer>

        </MainContainer>
      </Container>
    </>
  );
}

export default App;
