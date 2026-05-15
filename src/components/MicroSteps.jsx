import React, { useState, useEffect } from 'react';

function MicroSteps({ onNavigate }) {
  // phase can be: 'selection', 'breathing', or 'action'
  const [phase, setPhase] = useState('selection'); 
  const [scaryTask, setScaryTask] = useState('');

  // Emotionally smart choices (low friction, no typing needed)
  const tasks = [
    "Writing / Essay",
    "Studying for an exam",
    "Answering emails",
    "Cleaning my space"
  ];

  // When user clicks a task, move to breathing phase
  const handleSelect = (task) => {
    setScaryTask(task);
    setPhase('breathing');
  };

  // This is the magic timer. It watches the 'phase' variable.
  // If phase becomes 'breathing', it waits 6 seconds, then shows the action steps.
  useEffect(() => {
    if (phase === 'breathing') {
      const timer = setTimeout(() => {
        setPhase('action');
      }, 6000); 
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [phase]);

  // Generate specific actionable steps based on what they clicked
  const getSteps = () => {
    switch (scaryTask) {
      case "Writing / Essay":
        return ["1. Open a blank document.", "2. Type just the title.", "3. Write one terrible, messy sentence.", "4. Walk away for 2 minutes."];
      case "Studying for an exam":
        return ["1. Clear off your desk.", "2. Open the textbook/notes.", "3. Read just the first heading.", "4. Take a deep breath."];
      case "Answering emails":
        return ["1. Open your inbox.", "2. Pick the absolute easiest email.", "3. Draft a 1-sentence reply.", "4. Hit send and close it."];
      case "Cleaning my space":
        return ["1. Grab a trash bag.", "2. Throw away exactly 3 pieces of trash.", "3. Put 1 item where it belongs.", "4. Sit back down."];
      default:
        return ["1. Open the tools you need.", "2. Do the absolute smallest piece.", "3. Forgive yourself for struggling.", "4. Take a break."];
    }
  };

  return (
    <div className="relative min-h-[500px] w-full max-w-md flex flex-col items-center justify-center animate-fade-in p-6">
      
      {/* Back Button */}
      <div className="w-full flex justify-start mb-4 z-20">
        <button 
          onClick={() => onNavigate('home')}
          className="text-gray-400 hover:text-sprout-text transition-colors font-medium text-sm flex items-center gap-2"
        >
          ← Back to safe space
        </button>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative w-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-lg border border-white/50 p-8 flex flex-col items-center z-10 min-h-[400px]">
        
        {/* PHASE 1: SELECTION */}
        {phase === 'selection' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <div className="text-4xl mb-4">🧊</div>
            <h2 className="text-2xl font-medium text-sprout-text mb-2 text-center tracking-tight">What feels impossible?</h2>
            <p className="text-sm text-gray-400 mb-8 text-center">No judgment. Just pick one.</p>
            
            <div className="flex flex-col gap-3 w-full">
              {tasks.map(task => (
                <button 
                  key={task}
                  onClick={() => handleSelect(task)}
                  className="bg-white/70 hover:bg-sprout-blue/20 border border-white/50 text-sprout-text py-4 px-4 rounded-2xl transition-all hover:scale-105 shadow-sm font-medium"
                >
                  {task}
                </button>
              ))}
              <button 
                onClick={() => handleSelect("Something else")}
                className="bg-transparent border border-gray-200 text-gray-400 py-3 px-4 rounded-2xl transition-all hover:bg-gray-50 mt-2 text-sm"
              >
                Something else
              </button>
            </div>
          </div>
        )}

        {/* PHASE 2: BREATHING */}
        {phase === 'breathing' && (
          <div className="flex flex-col items-center justify-center h-full w-full flex-1 animate-fade-in py-12">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Expanding/Contracting Circle */}
              <div className="absolute w-full h-full bg-sprout-blue rounded-full animate-breathe"></div>
              {/* Center Text */}
              <div className="z-10 text-xl font-medium text-sprout-text">Breathe in...</div>
            </div>
            <p className="text-sm text-gray-400 mt-16 text-center animate-fade-in" style={{ animationDelay: '2s' }}>
              Melting the ice...
            </p>
          </div>
        )}

        {/* PHASE 3: ACTION STEPS */}
        {phase === 'action' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <div className="text-4xl mb-4">💧</div>
            <h2 className="text-2xl font-medium text-sprout-text mb-6 text-center tracking-tight">Let's just take a tiny step.</h2>
            
            <div className="flex flex-col gap-4 w-full">
              {getSteps().map((step, index) => (
                <div key={index} className="bg-white/80 p-4 rounded-2xl border border-white/50 shadow-sm flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-8 h-8 rounded-full bg-sprout-peach/50 flex items-center justify-center text-sm font-medium text-sprout-text shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sprout-text font-medium text-sm">{step}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => onNavigate('home')}
              className="mt-10 bg-sprout-lavender/50 hover:bg-sprout-lavender/80 text-sprout-text py-3 px-8 rounded-full font-medium transition-all hover:shadow-md hover:-translate-y-1"
            >
              I did one step! ✨
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default MicroSteps;