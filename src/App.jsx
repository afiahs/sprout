import React, { useState } from 'react';
import Home from './components/Home';
import BrainDump from './components/BrainDump';

function App() {
  // This state remembers which screen we are currently looking at
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div className="min-h-screen bg-sprout-bg flex items-center justify-center p-4">
      {/* If currentScreen is 'home', show the Home component */}
      {currentScreen === 'home' && (
        <Home onNavigate={setCurrentScreen} />
      )}
      
      {/* If currentScreen is 'brainDump', show the BrainDump component */}
      {currentScreen === 'brainDump' && (
        <BrainDump onNavigate={setCurrentScreen} />
      )}
    </div>
  );
}

export default App;