import React from 'react';
import { Container, MainBody } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Showcase } from './components/Showcase';
import { Myskills } from './components/Myskills';
import { MyProjects } from './components/MyProjects';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Showcase/>
          <Myskills/>
          <MyProjects/>
          <Footer/>
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
