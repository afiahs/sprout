import React, { useState } from 'react';
import Home from './components/Home';
import BrainDump from './components/BrainDump';
import Timer from './components/Timer';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="min-h-screen bg-sprout-bg flex items-center justify-center p-4">
      {currentScreen === 'home' && (
        <Home onNavigate={setCurrentScreen} />
      )}
      
      {currentScreen === 'brainDump' && (
        <BrainDump onNavigate={setCurrentScreen} />
      )}

      {currentScreen === 'timer' && (
        <Timer onNavigate={setCurrentScreen} />
      )}
    </div>
  );
}

export default App;