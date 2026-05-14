import React, { useState, useEffect } from 'react';

function Timer({ onNavigate }) {
  // 25 minutes = 1500 seconds
  const [timeLeft, setTimeLeft] = useState(1500); 
  const [isActive, setIsActive] = useState(false);

  // This hook handles the ticking clock
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(1500);
  };

  // Math to display minutes and seconds nicely
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // Pad with a zero so it says "09" instead of "9"
  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="max-w-md w-full bg-white rounded-[2rem] shadow-sm p-8 border border-gray-100 flex flex-col items-center animate-fade-in">
      {/* Back Button */}
      <div className="w-full">
        <button 
          onClick={() => onNavigate('home')}
          className="text-gray-400 hover:text-gray-600 text-sm mb-6 flex items-center gap-1 transition-colors"
        >
          ← Back to home
        </button>
      </div>

      <h2 className="text-2xl font-medium text-sprout-text mb-2">Deep Breath. Focus. 🍃</h2>
      <p className="text-gray-400 text-sm mb-8 text-center">
        Work for 25 minutes, then take a 5 minute break. You've got this.
      </p>

      {/* The Clock Display */}
      <div className="text-7xl font-light text-sprout-text mb-10 tabular-nums">
        {displayTime}
      </div>

      {/* Controls */}
      <div className="flex gap-4 w-full">
        <button 
          onClick={toggleTimer}
          className={`${isActive ? 'bg-sprout-peach' : 'bg-sprout-primary'} bg-opacity-40 hover:bg-opacity-60 text-sprout-text py-4 rounded-xl font-medium transition-all flex-1`}
        >
          {isActive ? 'Pause' : 'Start Growing'}
        </button>
        
        <button 
          onClick={resetTimer}
          className="bg-gray-100 hover:bg-gray-200 text-sprout-text py-4 px-6 rounded-xl font-medium transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;