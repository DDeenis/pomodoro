import React from 'react';
import './App.css';
import ClockAreaContainer from './components/ClockArea/ClockAreaContainer';
import ProgressBarArea from './components/ProgressBarArea/ProgressBarArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* TaskBar */}
      </header>

      <main>
        <ClockAreaContainer />
      </main>

      <ProgressBarArea />
    </div>
  );
}

export default App;
