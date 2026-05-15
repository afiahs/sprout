import React, { useState, useEffect } from 'react';

function StudyRoom({ onNavigate }) {
  // Simple background clock for the room
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[600px] w-full max-w-md flex flex-col items-center justify-center animate-fade-in p-6">
      
      {/* Back Button */}
      <div className="w-full flex justify-start mb-4 z-20">
        <button 
          onClick={() => onNavigate('home')}
          className="text-gray-400 hover:text-sprout-text transition-colors font-medium text-sm flex items-center gap-2"
        >
          ← Tiptoe back to menu
        </button>
      </div>

      {/* Cozy Room Card */}
      <div className="relative w-full bg-white/50 backdrop-blur-2xl rounded-[2.5rem] shadow-xl border border-white/40 p-8 flex flex-col items-center z-10 overflow-hidden">
        
        {/* Soft Desk Glow */}
        <div className="absolute top-20 w-48 h-48 bg-sprout-primary/20 rounded-full blur-3xl animate-breathe"></div>

        {/* Current Time Display */}
        <div className="z-10 mb-8 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Current Time</p>
          <h2 className="text-3xl font-medium text-sprout-text opacity-80">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </h2>
        </div>

        {/* The Desk Scene (Built with CSS and Emojis!) */}
        <div className="z-10 flex flex-col items-center justify-center mb-12 mt-4 relative">
          
          {/* Floating Notes (Music) */}
          <div className="absolute -top-8 -left-4 text-sm animate-float opacity-50" style={{ animationDuration: '4s' }}>🎵</div>
          <div className="absolute -top-12 right-2 text-sm animate-float opacity-50" style={{ animationDuration: '5s', animationDelay: '1s' }}>🎶</div>

          {/* Characters on Desk */}
          <div className="flex items-end gap-3 mb-2">
            <div className="text-5xl animate-breathe">🌱</div>
            <div className="text-4xl -mb-1 opacity-90">💻</div>
            <div className="text-2xl -mb-1 animate-float" style={{ animationDuration: '3s' }}>☕️</div>
          </div>

          {/* The physical desk line */}
          <div className="w-48 h-3 bg-sprout-text/20 rounded-full shadow-inner"></div>
        </div>

        <div className="z-10 text-center w-full bg-white/40 rounded-2xl p-5 border border-white/50">
          <p className="text-sprout-text font-medium mb-1">Sprout is studying too.</p>
          <p className="text-xs text-gray-500">Leave this screen open, put on some lo-fi, and let's get some work done together.</p>
        </div>

      </div>
    </div>
  );
}

export default StudyRoom;