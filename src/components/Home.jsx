import React, { useState, useEffect } from 'react';

function Home({ onNavigate }) {
  // Dark mode state
  const [isDark, setIsDark] = useState(false);

  // Check if dark mode is already active when page loads
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleSleepyMode = () => {
    // This adds or removes the "dark" class from the entire HTML app
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="relative min-h-[500px] w-full max-w-md flex flex-col items-center justify-center animate-fade-in p-6">
      
      {/* Theme Toggle Button (Top Right) */}
      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={toggleSleepyMode}
          className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-xl shadow-sm hover:scale-110 transition-transform"
          title="Toggle Sleepy Mode"
        >
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative w-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-lg border border-white/50 p-8 flex flex-col items-center z-10">
        
        {/* Logo/Icon */}
        <div className="w-20 h-20 bg-white/80 rounded-3xl shadow-sm flex items-center justify-center mb-6 animate-float border border-white/50">
          <span className="text-4xl">🌱</span>
        </div>

        {/* Greeting */}
        <h1 className="text-3xl font-semibold text-sprout-text mb-2 tracking-tight">Hi, bestie.✨</h1>
        
        <div className="bg-white/70 py-2 px-6 rounded-full border border-white/50 mb-10 shadow-sm">
          <p className="text-sm font-medium text-sprout-text">Take a deep breath. You're safe here.</p>
        </div>

        {/* Navigation Menu */}
        <div className="w-full flex flex-col gap-4">
          
          <button 
            onClick={() => onNavigate('brainDump')}
            className="group w-full bg-white/70 hover:bg-sprout-peach/30 border border-white/50 rounded-3xl p-5 flex items-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-sprout-peach/50 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
              🧠
            </div>
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-sprout-text">Brain Dump</span>
              <span className="text-xs text-gray-500 font-medium">Clear the mental clutter</span>
            </div>
            <span className="text-gray-400 group-hover:text-sprout-text transition-colors">→</span>
          </button>

          <button 
            onClick={() => onNavigate('microSteps')}
            className="group w-full bg-white/70 hover:bg-sprout-blue/30 border border-white/50 rounded-3xl p-5 flex items-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-sprout-blue/50 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
              🧊
            </div>
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-sprout-text">Melt the Ice</span>
              <span className="text-xs text-gray-500 font-medium">When you can't start</span>
            </div>
            <span className="text-gray-400 group-hover:text-sprout-text transition-colors">→</span>
          </button>

          {/* NEW: Study with Sprout Button */}
          <button 
            onClick={() => onNavigate('studyRoom')}
            className="group w-full bg-white/70 hover:bg-sprout-primary/30 border border-white/50 rounded-3xl p-5 flex items-center transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-sprout-primary/40 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
              ☕️
            </div>
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-sprout-text">Study Together</span>
              <span className="text-xs text-gray-500 font-medium">Cozy ambient focus room</span>
            </div>
            <span className="text-gray-400 group-hover:text-sprout-text transition-colors">→</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;