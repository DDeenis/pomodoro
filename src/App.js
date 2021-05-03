import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import ClockAreaContainer from './components/ClockArea/ClockAreaContainer';
import HeaderArea from './components/HeaderArea/HeaderArea';
import { StyledApp } from './styled';
import { lightTheme } from './themes/themes';
import ProgressBarAreaContainer from "./components/ProgressBarArea/ProgressBarAreaContainer";

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

        <ProgressBarAreaContainer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
