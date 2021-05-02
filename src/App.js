import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import ClockAreaContainer from './components/ClockArea/ClockAreaContainer';
import HeaderArea from './components/HeaderArea/HeaderArea';
import ProgressBarArea from './components/ProgressBarArea/ProgressBarArea';
import { StyledApp } from './styled';
import { lightTheme } from './themes/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StyledApp className="App">
        <header>
          <HeaderArea />
        </header>

        <main>
          <ClockAreaContainer />
        </main>

        <ProgressBarArea />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
