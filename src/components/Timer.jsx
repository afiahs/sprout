import React, { useState, useEffect } from 'react';

function Timer({ onNavigate }) {
  // --- STATE ---
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [status, setStatus] = useState('idle');

  // --- PRESETS ---
  const presets = [
    { label: '5s (Test)', value: 0.0833 }, // Keep this for testing right now!
    { label: '15m', value: 15 },
    { label: '25m', value: 25 },
    { label: '45m', value: 45 },
  ];

  // --- TIMER LOGIC ---
  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft <= 0 && isActive) {
      // FIX: <= 0 instead of === 0 catches any decimal slips!
      setTimeLeft(0); // Force the display to exactly 00:00
      setStatus('completed');
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, timeLeft]);

  // --- MATH FOR DISPLAY ---
  // Math.max(0, ...) ensures it never displays a negative number
  const safeTimeLeft = Math.max(0, timeLeft); 
  const minutes = Math.floor(safeTimeLeft / 60);
  const seconds = safeTimeLeft % 60;
  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // --- HANDLERS ---
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setStatus('running');
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(false);
    setStatus('resting');
  };

  const handlePreset = (mins) => {
    // FIX: Math.round forces clean integers, so 4.998 becomes exactly 5
    setTimeLeft(Math.round(mins * 60)); 
    setIsActive(false);
    setStatus('idle');
  };

  // --- DYNAMIC VISUALS ---
  const getPlantVisual = () => {
    if (status === 'completed') return '🌼';
    if (status === 'resting') return '🪴💤';
    if (status === 'running') return '🌱';
    return '🌱';
  };

  const getMessage = () => {
    if (status === 'completed') return "You did it! So proud of you. ✨";
    if (status === 'resting') return "Taking a gentle pause. You're still doing great.";
    if (status === 'running') return "Just focus on breathing. One thing at a time.";
    return "Choose a soft focus time.";
  };

  return (
    <div className="relative min-h-[500px] w-full max-w-md flex flex-col items-center justify-center animate-fade-in p-6">
      
      <div className="w-full flex justify-start mb-4 z-20">
        <button 
          onClick={() => onNavigate('home')}
          className="text-gray-400 hover:text-sprout-text transition-colors font-medium text-sm flex items-center gap-2"
        >
          ← Back to safe space
        </button>
      </div>

      <div className="relative w-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-lg border border-white/50 p-8 flex flex-col items-center z-10 min-h-[450px]">
        
        <div className="text-5xl mb-4 transition-transform duration-500 hover:scale-110">
          {getPlantVisual()}
        </div>
        
        <p className="text-sm text-gray-500 font-medium mb-8 text-center h-5">
          {getMessage()}
        </p>

        <div className="relative w-48 h-48 rounded-full flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-sprout-blue/20"></div>
          
          {status === 'running' && !isPaused && (
            <div className="absolute inset-0 rounded-full border-4 border-sprout-blue animate-breathe opacity-50"></div>
          )}

          <h2 className="text-5xl font-medium text-sprout-text tracking-tight z-10">
            {displayTime}
          </h2>
        </div>

        {(status === 'idle' || status === 'resting' || status === 'completed') && (
          <div className="flex gap-2 mb-8 w-full justify-center">
            {presets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => handlePreset(preset.value)}
                className="bg-white/70 hover:bg-sprout-lavender/40 border border-white text-sprout-text py-2 px-4 rounded-xl text-sm font-medium transition-all shadow-sm hover:-translate-y-0.5"
              >
                {preset.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-4 w-full justify-center">
          {status === 'idle' || status === 'resting' || status === 'completed' ? (
            <button 
              onClick={handleStart}
              className="bg-sprout-primary/50 hover:bg-sprout-primary/70 text-sprout-text py-3 px-8 rounded-full font-medium transition-all hover:shadow-md w-full max-w-[200px]"
            >
              Start Focus
            </button>
          ) : (
             <>
              {isPaused ? (
                <button 
                  onClick={handleResume}
                  className="bg-sprout-primary/50 hover:bg-sprout-primary/70 text-sprout-text py-3 px-6 rounded-full font-medium transition-all hover:shadow-md flex-1"
                >
                  Resume
                </button>
              ) : (
                <button 
                  onClick={handlePause}
                  className="bg-sprout-peach/50 hover:bg-sprout-peach/70 text-sprout-text py-3 px-6 rounded-full font-medium transition-all hover:shadow-md flex-1"
                >
                  Pause
                </button>
              )}
              <button 
                onClick={handleStop}
                className="bg-gray-100 hover:bg-gray-200 text-gray-500 py-3 px-6 rounded-full font-medium transition-all hover:shadow-md flex-1"
              >
                Rest
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default Timer;