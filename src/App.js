import React from 'react';
import { Container, MainBody } from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Showcase } from './components/Showcase';
import { Myskills } from './components/Myskills';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Showcase/>
          <Myskills/>
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
