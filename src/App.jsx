import React, { useState } from 'react';
import Home from './components/Home';
import BrainDump from './components/BrainDump';
import MicroSteps from './components/MicroSteps';
import StudyRoom from './components/StudyRoom';
import Timer from './components/Timer'; // Keeping this just in case you want to use it later!

function App() {
  // This state tracks which page we are currently on. It starts on 'home'
  const [currentPage, setCurrentPage] = useState('home');

  return (
    // The main background wrapper that fills the screen
    // "transition-colors duration-500" makes the dark mode fade in smoothly!
    <div className="min-h-screen bg-sprout-bg dark:bg-sprout-bg transition-colors duration-500 flex items-center justify-center p-4">
      
      {/* This is the "traffic director". It only renders the component that matches the current page */}
      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'brainDump' && <BrainDump onNavigate={setCurrentPage} />}
      {currentPage === 'microSteps' && <MicroSteps onNavigate={setCurrentPage} />}
      {currentPage === 'studyRoom' && <StudyRoom onNavigate={setCurrentPage} />}
      {currentPage === 'timer' && <Timer onNavigate={setCurrentPage} />}

    </div>
  );
}

export default App;