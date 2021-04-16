import React from 'react';
import './App.css';
import ClockAreaContainer from './components/ClockArea/ClockAreaContainer';
import HeaderArea from './components/HeaderArea/HeaderArea';
import ProgressBarArea from './components/ProgressBarArea/ProgressBarArea';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderArea />
      </header>

      <main>
        <ClockAreaContainer />
      </main>

      <ProgressBarArea />
    </div>
  );
}

export default App;
