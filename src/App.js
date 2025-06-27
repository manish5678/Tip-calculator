import React from 'react';
import TipCalculator from './components/TipCalculator';
import './App.css';
// import '.TipCalculator.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tip Calculator</h1>
      </header>
      <main>
        <TipCalculator />
      </main>
    </div>
  );
}

export default App;