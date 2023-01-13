import Navbar from './components/navbar/navbar.component';
import { Main } from './components/navbar/navbar.styles';
import { Container , NavContainer , MainContainer } from './styles/SchedulePage.styles';
import Header from './components/header/header.component';

function App() {
  return (
    <>
      <Container>
        <NavContainer>
          <Navbar />
        </NavContainer>


        <MainContainer>
            <Header />
        </MainContainer>
      </Container>
    </>
  );
}

export default App;
